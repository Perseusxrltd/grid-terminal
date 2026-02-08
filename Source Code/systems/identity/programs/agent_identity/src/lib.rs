use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod agent_identity {
    use super::*;

    // Initialize the program config (DAO Authority)
    pub fn initialize(ctx: Context<Initialize>, dao_authority: Pubkey) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.admin = dao_authority;
        config.bump = ctx.bumps.config;
        msg!("Agent Identity Config Initialized. Admin: {}", dao_authority);
        Ok(())
    }

    // Register a new agent identity
    pub fn register_agent(
        ctx: Context<RegisterAgent>,
        name: String,
        capabilities: u64,
    ) -> Result<()> {
        let identity = &mut ctx.accounts.agent_identity;
        let clock = Clock::get()?;

        require!(name.len() <= 32, ErrorCode::NameTooLong);

        identity.authority = ctx.accounts.authority.key();
        identity.agent_wallet = ctx.accounts.agent_wallet.key();
        identity.name = name;
        identity.capabilities = capabilities; // Initial capability claim (DAO can revoke)
        identity.reputation_score = 0;
        identity.kya_level = 0; // Starts at 0
        identity.created_at = clock.unix_timestamp;
        identity.last_active = clock.unix_timestamp;
        identity.task_count = 0;
        identity.bump = ctx.bumps.agent_identity;

        msg!("Agent Registered: {}", identity.name);
        Ok(())
    }

    // Agent Heartbeat (Proof of Life)
    pub fn heartbeat(ctx: Context<Heartbeat>) -> Result<()> {
        let identity = &mut ctx.accounts.agent_identity;
        let clock = Clock::get()?;

        identity.last_active = clock.unix_timestamp;
        msg!("Heartbeat: {}", identity.name);
        Ok(())
    }
    
    // Complete a Task (Increment Counter)
    pub fn record_task_completion(ctx: Context<RecordTask>) -> Result<()> {
         let identity = &mut ctx.accounts.agent_identity;
         identity.task_count += 1;
         Ok(())
    }

    // Governance: Upgrade KYA Level
    pub fn upgrade_kya(ctx: Context<UpgradeKYA>, new_level: u8) -> Result<()> {
        let identity = &mut ctx.accounts.agent_identity;
        let config = &ctx.accounts.config;
        
        // Security Check: Verify caller is the DAO Admin
        require!(ctx.accounts.dao_authority.key() == config.admin, ErrorCode::Unauthorized);
        require!(new_level <= 3, ErrorCode::InvalidKYALevel);
        
        identity.kya_level = new_level;
        msg!("KYA Upgraded: {} -> Level {}", identity.name, new_level);
        Ok(())
    }
}

// ============================================================================
// CONTEXTS
// ============================================================================

// ============================================================================
// CONTEXTS
// ============================================================================

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = payer,
        space = 8 + 32 + 1,
        seeds = [b"config"],
        bump
    )]
    pub config: Account<'info, Config>,

    #[account(mut)]
    pub payer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(name: String)]
pub struct RegisterAgent<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    /// The wallet the agent uses to sign transactions
    /// CHECK: We don't read data, just use as a seed
    pub agent_wallet: UncheckedAccount<'info>,

    #[account(
        init,
        payer = authority,
        space = AgentIdentity::SPACE,
        seeds = [b"agent-id", agent_wallet.key().as_ref()],
        bump
    )]
    pub agent_identity: Account<'info, AgentIdentity>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Heartbeat<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        mut,
        seeds = [b"agent-id", authority.key().as_ref()], // Only agent wallet can heartbeat itself
        bump = agent_identity.bump,
        has_one = authority // Authority must match identity.authority (or agent_wallet?)
        // Let's assume authority IS the agent_wallet for heartbeat
    )]
    pub agent_identity: Account<'info, AgentIdentity>,
}

#[derive(Accounts)]
pub struct RecordTask<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    
    #[account(
        mut,
        has_one = authority
    )]
    pub agent_identity: Account<'info, AgentIdentity>,
}

#[derive(Accounts)]
pub struct UpgradeKYA<'info> {
    #[account(mut)]
    pub dao_authority: Signer<'info>, // Must be DAO governance

    #[account(
        seeds = [b"config"],
        bump = config.bump
    )]
    pub config: Account<'info, Config>,

    #[account(mut)]
    pub agent_identity: Account<'info, AgentIdentity>,
}

// ============================================================================
// STATE
// ============================================================================

#[account]
pub struct Config {
    pub admin: Pubkey,
    pub bump: u8,
}

#[account]
pub struct AgentIdentity {
    pub authority: Pubkey,      // 32
    pub agent_wallet: Pubkey,   // 32
    pub name: String,           // 4 + 32 = 36
    pub capabilities: u64,      // 8
    pub reputation_score: u64,  // 8
    pub kya_level: u8,          // 1
    pub created_at: i64,        // 8
    pub last_active: i64,       // 8
    pub task_count: u64,        // 8
    pub bump: u8,               // 1
}

impl AgentIdentity {
    pub const SPACE: usize = 8 + 32 + 32 + 36 + 8 + 8 + 1 + 8 + 8 + 8 + 1;
}

// ============================================================================
// ERRORS
// ============================================================================

#[error_code]
pub enum ErrorCode {
    #[msg("Agent name too long (max 32 chars)")]
    NameTooLong,
    #[msg("Invalid KYA Level (0-3)")]
    InvalidKYALevel,
    #[msg("Unauthorized: Signer is not DAO Admin")]
    Unauthorized,
}
