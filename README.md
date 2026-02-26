# APEX GHOST: Solana Pulse Layer 4

## Overview
APEX GHOST is an advanced, AI-driven trading interface designed for the Solana blockchain, specifically interacting with Raydium LP (Liquidity Pools). This application operates on Layer 4, offering sophisticated signal processing, automated trade execution, and robust profit management. It supports both **Simulation Mode** for strategic backtesting and **Real Mode** for live trading with Phantom/Jupiter wallets.

## Features
- **Intelligent Signal Engine:** Analyzes Raydium LP data to generate high-probability trade signals (STRICT A+, AGGRESSIVE B+, GRADE C+).
- **Automated & Manual Trade Execution:** Strike on signals with pre-configured strategies or manual input.
- **Dynamic Profit & Loss Tracking:** Real-time ROI monitoring and trend visualization for active positions.
- **Comprehensive Ledger & Analytics:** Detailed history of all trades, net gain, and target progression, exportable to Excel.
- **Ghost Vault Security:** Securely stores profits with an option for manual or automatic profit allocation.
- **Layer 4 Solana Pulse:** Direct integration with Helius RPC pool for optimized blockchain interaction.
- **Safety Buffer System:** Intelligent mechanism to protect capital and regulate compounding based on performance.
- **Biometric & PIN Authentication:** Enhanced security for accessing the Master interface.
- **Progressive Web App (PWA):** Installable on desktop and mobile devices for native-like experience.

## Modes of Operation
### 1. Simulation Mode
- **Purpose:** Ideal for testing strategies, backtesting, and understanding system behavior without financial risk.
- **Capital:** Operates with a virtual capital pool (default 100 SOL).
- **Ledger:** Maintains a separate history for simulated trades.

### 2. Real Mode
- **Purpose:** Live trading on the Solana mainnet with real capital.
- **Authentication:** Requires linking with Phantom/Jupiter private keys for trade execution and a Solana Vault Address for secure profit storage.
- **Capital:** Uses real SOL balance from the linked trade wallet.
- **Ledger:** Maintains a separate history for real trades.

## System Architecture
- **Frontend:** HTML, TailwindCSS, JavaScript (Vanilla JS for speed and efficiency).
- **Blockchain Interaction:** Solana Web3.js, Helius RPC Pool for reliable and fast data.
- **Data Proxy:** Utilizes multiple proxy pipelines for robust API calls to Dexscreener (for market data).
- **Security:** In-app authentication, secure data handling (though sensitive keys are for local use, not committed to repo).

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- For Real Mode: A Solana wallet (Phantom, Jupiter recommended) and an empty Solana Vault Address.
- Node.js & npm/yarn (for local development and dependency installation, if applicable).

### Installation (PWA)
1. Open the hosted URL of APEX GHOST in your browser.
2. Look for the "Install App" or "Add to Home Screen" prompt in your browser's address bar or menu.
3. Follow the instructions to install APEX GHOST directly to your device.

### Local Development (Optional)
1. Clone the repository:
   ```bash
   git clone [https://github.com/YourUsername/apex-ghost.git](https://github.com/YourUsername/apex-ghost.git)
   cd apex-ghost

