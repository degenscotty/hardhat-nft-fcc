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
        vrfCoordinator: "0x7E10652Cb79Ba97bC1D0F38a1e8FaD8464a8a908",
        gasLane: "0x3f631d5ec60a0ce16203bcd6aff7ffbc423e22e452786288e172d467354304c8",
        subscriptionId:
            "82552481492719641598106587877252959688609853062389465704760740256481593202832",
        callbackGasLimit: "500000",
        mintFee: ethers.utils.parseEther("0.01"),
        ethUsdpriceFeedAddress: "0xF0d50568e3A7e8259E16663972b11910F89BD8e7",
    },
    31337: {
        name: "hardhat",
    },
}

const DECIMALS = "8"
const INITIAL_PRICE = "200000000000"

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_PRICE,
}
