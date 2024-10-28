require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")
require("dotenv").config()

/* RPC URLS */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia"
const SONIC_RPC_URL = process.env.SONIC_RPC_URL || "https://sonic.testnet"
const FANTOM_TESTNET_RPC_URL = process.env.FANTOM_TESTNET_RPC_URL || "https://fantom.testnet"
const AMOY_RPC_URL = process.env.AMOY_RPC_URL || "https://amoy.testnet"

/* WALLET PRIVATE KEY */
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"

/* API KEYS */
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"
const FANTOMSCAN_API_KEY = process.env.FANTOMSCAN_API_KEY || "key"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "key"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
        fantom_testnet: {
            url: FANTOM_TESTNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4002,
            blockConfirmations: 6,
        },
        sonic: {
            url: SONIC_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 64165,
            blockConfirmations: 6,
        },
        amoy: {
            url: AMOY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 80002,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.6.0",
            },
        ],
    },
    etherscan: {
        apiKey: {
            mainnet: ETHERSCAN_API_KEY,
            fantom_testnet: FANTOMSCAN_API_KEY,
            amoy: POLYGONSCAN_API_KEY,
        },
        customChains: [
            {
                network: "fantom_testnet",
                chainId: 4002,
                urls: {
                    apiURL: "https://api-testnet.ftmscan.com/api",
                    browserURL: "https://testnet.ftmscan.com",
                },
            },
            {
                network: "amoy",
                chainId: 80002,
                urls: {
                    apiURL: "https://api-amoy.polygonscan.com/api",
                    browserURL: "https://amoy.polygonscan.com/",
                },
            },
        ],
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        //currency: "USD",
        //coinmarketcap: COINMARKETCAP_API_KEY,
        //token: "FTM",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    mocha: {
        timeout: 300000,
    },
}
