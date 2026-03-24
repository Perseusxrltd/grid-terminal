/**
 * 🦅 SOVEREIGN SWARM: $GRID Devnet Deployment Script
 * Version: 2.1.0 (Native Fees + Firewall Hook)
 * 
 * FEATURES:
 * - Token-2022 Standard
 * - 2% Transfer Fee (Native Extension)
 * - Transfer Hook (Firewall Integration)
 * - On-chain Metadata
 * - Standard Devnet Broadcast (No Jito)
 * 
 * Usage:
 *   node devnet-deploy.js --hook-program-id <PROGRAM_ID>           # Dry run
 *   node devnet-deploy.js --execute --hook-program-id <PROGRAM_ID> # LIVE Devnet Broadcast
 */

const {
    Connection,
    Keypair,
    SystemProgram,
    Transaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    sendAndConfirmTransaction
} = require('@solana/web3.js');
const {
    ExtensionType,
    TOKEN_2022_PROGRAM_ID,
    createInitializeMintInstruction,
    createInitializeTransferFeeConfigInstruction,
    createInitializeMetadataPointerInstruction,
    createInitializeTransferHookInstruction,
    createMintToInstruction,
    createAssociatedTokenAccountInstruction,
    getAssociatedTokenAddressSync,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getMintLen,
    TYPE_SIZE,
    LENGTH_SIZE
} = require('@solana/spl-token');
const {
    createInitializeInstruction,
    createUpdateFieldInstruction,
    pack
} = require('@solana/spl-token-metadata');
const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
    name: 'The Grid',
    symbol: 'GRID',
    decimals: 9,
    transferFeeBasisPoints: 200, // 2% Native Tax
    maxTransferFee: BigInt(100_000_000) * BigInt(10 ** 9), // Effectively unlimited cap (10% of supply)
    metadataUri: 'https://raw.githubusercontent.com/SovereignSwarm/grid-terminal/main/docs/metadata.json',

    // Distribution
    founderWallet: 'BGSafo9zLsFhYtwsP6Z7TwWjfq9o18KtrCmskVcr8PuV', // CEO/Board
    founderAmount: BigInt(75_000_000) * BigInt(10 ** 9),   // 75M
    deployerAmount: BigInt(925_000_000) * BigInt(10 ** 9), // 925M

    // Networking
    rpcUrl: 'https://api.devnet.solana.com',

    vaultPath: path.resolve(__dirname, '../../../Grid-Private/auth/vault.json'),
};

// ============================================================================
// UTILITIES
// ============================================================================

function loadDeployer() {
    try {
        console.log(`🔍 Looking for vault at: ${CONFIG.vaultPath}`);
        console.log(`🔍 Vault exists: ${fs.existsSync(CONFIG.vaultPath)}`);
        // Try to load from vault first
        if (fs.existsSync(CONFIG.vaultPath)) {
            const vault = JSON.parse(fs.readFileSync(CONFIG.vaultPath, 'utf8'));
            console.log(`🔍 Vault loaded, solana key present: ${!!vault.solana?.deployer_pk}`);
            const pkArray = vault.solana?.deployer_pk;
            if (pkArray) return Keypair.fromSecretKey(Uint8Array.from(pkArray));
        }

        // Fallback: Check for local devnet keypair
        const localKeyPath = path.join(process.cwd(), 'devnet-deployer.json');
        console.log(`🔍 Looking for local key at: ${localKeyPath}`);
        if (fs.existsSync(localKeyPath)) {
            const secretKey = JSON.parse(fs.readFileSync(localKeyPath, 'utf8'));
            return Keypair.fromSecretKey(Uint8Array.from(secretKey));
        }

        // Generate temporary if neither exists (for dry run)
        console.warn("⚠️ No deployer key found. Generating temporary keypair for dry run.");
        return Keypair.generate();
    } catch (e) {
        console.error(`❌ Key Load Failed: ${e.message}`);
        process.exit(1);
    }
}

function resolveHookProgramId() {
    const flagIndex = process.argv.indexOf('--hook-program-id');
    const rawProgramId =
        (flagIndex >= 0 && process.argv[flagIndex + 1]) ||
        process.env.HOOK_PROGRAM_ID ||
        null;

    if (!rawProgramId) {
        return null;
    }

    try {
        return new PublicKey(rawProgramId);
    } catch (e) {
        console.error(`❌ Invalid hook program ID: ${e.message}`);
        process.exit(1);
    }
}

// ============================================================================
// MAIN DEPLOYMENT
// ============================================================================

async function run() {
    const isExecute = process.argv.includes('--execute');
    const hookProgramId = resolveHookProgramId();
    const deployer = loadDeployer();
    const connection = new Connection(CONFIG.rpcUrl, 'confirmed');

    console.log(`\n🦅 SOVEREIGN $GRID DEVNET DEPLOYMENT`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`Deployer: ${deployer.publicKey.toBase58()}`);
    console.log(`Network:  Devnet`);
    console.log(`Mode:     ${isExecute ? 'LIVE' : 'DRY RUN'}`);
    console.log(`Hook ID:  ${hookProgramId ? hookProgramId.toBase58() : 'UNSET'}`);
    console.log(`Tax:      2% Native`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

    if (!hookProgramId) {
        const guidance = 'Pass --hook-program-id <PROGRAM_ID> or set HOOK_PROGRAM_ID.';
        if (isExecute) {
            console.error(`❌ Hook program ID is required for live runs. ${guidance}`);
            process.exit(1);
        }

        console.warn(`⚠️ No hook program ID configured. ${guidance}`);
        console.warn('⚠️ Dry run will continue without transfer-hook initialization.');
    }

    if (isExecute) {
        // Airdrop SOL if needed
        const balance = await connection.getBalance(deployer.publicKey);
        if (balance < 1 * LAMPORTS_PER_SOL) {
            console.log(`💧 Requesting Airdrop...`);
            try {
                const sig = await connection.requestAirdrop(deployer.publicKey, 2 * LAMPORTS_PER_SOL);
                await connection.confirmTransaction(sig);
                console.log(`✅ Airdrop received.`);
            } catch (e) {
                console.warn(`⚠️ Airdrop failed (might be rate limited): ${e.message}`);
            }
        }
    }

    const mintKeypair = Keypair.generate();
    const mint = mintKeypair.publicKey;
    const founderPubkey = new PublicKey(CONFIG.founderWallet);

    // Define metadata with mint address
    const metadata = {
        mint: mint,
        name: CONFIG.name,
        symbol: CONFIG.symbol,
        uri: CONFIG.metadataUri,
        additionalMetadata: [],
    };

    // 1. Calculate Space and Rent
    // We are using: TransferFeeConfig, MetadataPointer, TransferHook, and TokenMetadata
    // TokenMetadata is variable length and stored at the end.
    const extensions = [
        ExtensionType.TransferFeeConfig,
        ExtensionType.MetadataPointer,
        ...(hookProgramId ? [ExtensionType.TransferHook] : []),
        // ExtensionType.TokenMetadata // We will add its length manually
    ];
    const mintLen = getMintLen(extensions);

    // Calculate metadata space (TLV header 4 bytes + packed data)
    const metadataLen = pack(metadata).length;
    const totalLen = mintLen + 4 + metadataLen;
    const lamports = await connection.getMinimumBalanceForRentExemption(totalLen);

    console.log(`🔍 Mint Address: ${mint.toBase58()}`);
    console.log(`📊 Total Space: ${totalLen} bytes`);
    console.log(`💰 Rent Required: ${lamports / LAMPORTS_PER_SOL} SOL`);

    // 2. Build Transaction 1: Create Mint & Initialize Extensions
    const tx1 = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey: deployer.publicKey,
            newAccountPubkey: mint,
            space: totalLen,
            lamports,
            programId: TOKEN_2022_PROGRAM_ID,
        }),
        // Initialize Transfer Fee (2%)
        createInitializeTransferFeeConfigInstruction(
            mint,
            deployer.publicKey, // Authority to update fee
            deployer.publicKey, // Authority to withdraw fee
            CONFIG.transferFeeBasisPoints,
            CONFIG.maxTransferFee,
            TOKEN_2022_PROGRAM_ID
        ),
        // Initialize Metadata Pointer (Points to the mint itself)
        createInitializeMetadataPointerInstruction(
            mint,
            deployer.publicKey,
            mint,
            TOKEN_2022_PROGRAM_ID
        ),
        ...(hookProgramId ? [
            // Only include the extension when the hook deployment is explicitly provided.
            createInitializeTransferHookInstruction(
                mint,
                deployer.publicKey,
                hookProgramId,
                TOKEN_2022_PROGRAM_ID
            )
        ] : []),
        // Initialize Metadata (This instruction initializes the extension AND the data)
        // For TokenMetadata, this must happen BEFORE InitializeMint in some versions,
        // or it handles the extension creation itself.
        createInitializeInstruction({
            programId: TOKEN_2022_PROGRAM_ID,
            mint: mint,
            metadata: mint,
            name: metadata.name,
            symbol: metadata.symbol,
            uri: metadata.uri,
            mintAuthority: deployer.publicKey,
            updateAuthority: deployer.publicKey,
        }),
        // Initialize Mint (Now it should see the Metadata extension initialized)
        createInitializeMintInstruction(
            mint,
            CONFIG.decimals,
            deployer.publicKey, // Mint Authority
            null, // Freeze Authority (None)
            TOKEN_2022_PROGRAM_ID
        ),
        // Add Description
        createUpdateFieldInstruction({
            programId: TOKEN_2022_PROGRAM_ID,
            metadata: mint,
            updateAuthority: deployer.publicKey,
            field: 'description',
            value: 'Sovereign Infrastructure for the Agentic Economy.'
        })
    );

    // 3. Build Transaction 2: Distribution (ATAs + MintTo)
    const founderAta = getAssociatedTokenAddressSync(mint, founderPubkey, false, TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID);
    const deployerAta = getAssociatedTokenAddressSync(mint, deployer.publicKey, false, TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID);

    const tx2 = new Transaction().add(
        createAssociatedTokenAccountInstruction(deployer.publicKey, founderAta, founderPubkey, mint, TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID),
        createAssociatedTokenAccountInstruction(deployer.publicKey, deployerAta, deployer.publicKey, mint, TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID),
        createMintToInstruction(mint, founderAta, deployer.publicKey, CONFIG.founderAmount, [], TOKEN_2022_PROGRAM_ID),
        createMintToInstruction(mint, deployerAta, deployer.publicKey, CONFIG.deployerAmount, [], TOKEN_2022_PROGRAM_ID)
    );

    if (!isExecute) {
        console.log(`\n🧪 DRY RUN COMPLETE`);
        console.log(`- Mint: ${mint.toBase58()}`);
        console.log(`- Founder ATA: ${founderAta.toBase58()}`);
        console.log(`- Deployer ATA: ${deployerAta.toBase58()}`);
        console.log(`\nRun with --execute to broadcast to Devnet.`);
        return;
    }

    // 4. Execute Transactions
    try {
        console.log(`📡 Sending Transaction 1 (Create Mint)...`);
        const sig1 = await sendAndConfirmTransaction(connection, tx1, [deployer, mintKeypair]);
        console.log(`✅ Tx1 Confirmed: ${sig1}`);

        console.log(`📡 Sending Transaction 2 (Mint & Distribute)...`);
        const sig2 = await sendAndConfirmTransaction(connection, tx2, [deployer]);
        console.log(`✅ Tx2 Confirmed: ${sig2}`);

        console.log(`\n🎉 DEPLOYMENT SUCCESSFUL!`);
        console.log(`🔗 Token: https://solscan.io/token/${mint.toBase58()}?cluster=devnet`);

        // Save mint keypair
        const keyPath = path.join(process.cwd(), `devnet-mint-${mint.toBase58()}.json`);
        fs.writeFileSync(keyPath, JSON.stringify(Array.from(mintKeypair.secretKey)));
        console.log(`💾 Mint keypair saved to ${keyPath}`);

    } catch (e) {
        console.error(`❌ Deployment Failed: ${e.message}`);
        if (e.logs) {
            console.error("Logs:", e.logs);
        }
    }
}

run().catch(console.error);
