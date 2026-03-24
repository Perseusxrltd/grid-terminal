#!/usr/bin/env node

// Verify $GRID Transfer Hook program is deployed on devnet
const { Connection, PublicKey } = require('@solana/web3.js');

const DEVNET_RPC = 'https://api.devnet.solana.com';

async function verifyProgram() {
  const programIdArg = process.argv[2] || process.env.HOOK_PROGRAM_ID;
  if (!programIdArg) {
    console.error('❌ Usage: node verify-program.js <PROGRAM_ID>');
    process.exit(1);
  }

  console.log('🦅 Verifying $GRID Transfer Hook program deployment...');
  console.log(`Program ID: ${programIdArg}`);
  console.log(`RPC: ${DEVNET_RPC}`);
  
  const connection = new Connection(DEVNET_RPC, 'confirmed');
  let programId;
  try {
    programId = new PublicKey(programIdArg);
  } catch (error) {
    console.error('❌ Invalid program ID:', error.message);
    process.exit(1);
  }
  
  try {
    // Check if account exists
    const accountInfo = await connection.getAccountInfo(programId);
    
    if (!accountInfo) {
      console.log('❌ Program not found on devnet');
      return false;
    }
    
    console.log('✅ Program account found on devnet');
    console.log(`   Owner: ${accountInfo.owner.toString()}`);
    console.log(`   Executable: ${accountInfo.executable}`);
    console.log(`   Lamports: ${accountInfo.lamports / 1e9} SOL`);
    console.log(`   Data length: ${accountInfo.data.length} bytes`);
    
    // Check if it's owned by the BPF loader
    const BPF_LOADER_UPGRADEABLE = new PublicKey('BPFLoaderUpgradeab1e11111111111111111111111');
    if (accountInfo.owner.equals(BPF_LOADER_UPGRADEABLE)) {
      console.log('✅ Program is owned by BPF Loader Upgradeable (standard for Anchor programs)');
    } else {
      console.log(`⚠️  Program owner is ${accountInfo.owner.toString()} (expected BPF Loader Upgradeable)`);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error verifying program:', error.message);
    return false;
  }
}

// Run verification
verifyProgram().then(success => {
  if (success) {
    console.log('\n🎉 $GRID Transfer Hook program verification complete!');
    console.log('   Next: Create token mint with transfer hook extension');
  } else {
    console.log('\n🔧 Program verification failed. Check deployment.');
    process.exit(1);
  }
});
