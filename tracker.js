mas2
multi-chain-wallet-tracker
A Node.js tool that tracks balances and token holdings across multiple EVM-compatible chains in real-time.
#!/usr/bin/env node
const Web3 = require("web3");

const chains = {
    ethereum: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
    bsc: "https://bsc-dataseed.binance.org/",
    polygon: "https://polygon-rpc.com/"
};

const wallet = process.argv[2];

(async () => {
    for (const [name, rpc] of Object.entries(chains)) {
        const web3 = new Web3(rpc);
        const balance = await web3.eth.getBalance(wallet);
        console.log(`${name.toUpperCase()} Balance: ${web3.utils.fromWei(balance, "ether")} ETH`);
    }
})();
