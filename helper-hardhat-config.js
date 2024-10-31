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
        vrfCoordinatorV2: "0x7E10652Cb79Ba97bC1D0F38a1e8FaD8464a8a908",
        gasLane: "0x3f631d5ec60a0ce16203bcd6aff7ffbc423e22e452786288e172d467354304c8",
        subscriptionId:
            "82552481492719641598106587877252959688609853062389465704760740256481593202832",
        callbackGasLimit: "500000",
        mintFee: ethers.utils.parseEther("0.01"),
        ethUsdpriceFeedAddress: "0xF0d50568e3A7e8259E16663972b11910F89BD8e7",
    },
    31337: {
        name: "localhost",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        mintFee: "10000000000000000", // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
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
