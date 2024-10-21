const { ethers } = require("hardhat")

const networkConfig = {
    11155111: {
        name: "sepolia",
    },
    4002: {
        name: "fantom_testnet",
    },
    80002: {
        name: "amoy",
    },
    31337: {
        name: "hardhat",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
