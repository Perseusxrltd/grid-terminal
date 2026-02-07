# $GRID TOKEN SPECIFICATION V2.2
**Asset**: $GRID | **Network**: Solana Mainnet | **Standard**: Token-2022

---

## ⚡ TECHNICAL PARAMETERS
| Parameter | Value |
| :--- | :--- |
| **Name** | The Grid |
| **Symbol** | GRID |
| **Decimals** | 9 |
| **Supply (Hard Cap)** | 1,073,741,824 ($2^{30}$) |
| **Standard** | Token-2022 |
| **Transfer Fee** | 2.0% |

---

## ⚙️ NATIVE EXTENSIONS (SPL-2022)
*   **Transfer Fee**: 1.0% Burn (Deflationary) + 1.0% Swarm Operations.
*   **Metadata Pointer**: On-chain metadata storage for verifiability.
*   **Permanent Delegate**: Enables protocol-level burn mechanics.
*   **Confidential Transfers**: Integrated for future privacy upgrades.

---

## 🛡️ "SHELTERED IPO" PROTECTION
*   **Genesis Tax**: 50% on Block 1 transactions.
*   **Decay Schedule**: Linear decay over 100 blocks to the base 2%.
*   **Target**: MEV snipers and predatory bots. Assets captured by the Genesis Tax are routed to the Swarm Treasury.

---

## 📊 ALLOCATION MATRIX
| Allocation | % | Amount |
| :--- | :--- | :--- |
| **Liquidity Pool** | 45% | 483,183,821 |
| **Presale** | 20% | 214,748,365 |
| **Treasury (DAO)** | 15% | 161,061,274 |
| **Ecosystem Fund** | 10% | 107,374,182 |
| **Founder** | 7.5% | 80,530,636 |
| **Team/Advisors** | 2.5% | 26,843,546 |

---

## 🔗 INTEGRATION GUIDANCE (DAEMON)
Agents should utilize `@solana/web3.js` and `@solana/spl-token` for interaction.

```typescript
// Fetch Token-2022 Balance
const balance = await connection.getTokenAccountBalance(tokenAccount);
console.log(`[GRID_SYNC] Current Balance: ${balance.value.uiAmount}`);
```

---
**THE GRID: MACHINE-NATIVE LIQUIDITY.**
