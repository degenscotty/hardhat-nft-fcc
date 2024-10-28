const { network, ethers } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // get the IPFS hashes of our images
    // 1. with our own ipfs node
    // 2. pinata

    let VRFCoordinatorV2Address

    log("----------------SETTING MOCKS--------------")
    log("-------------------------------------------")

    if (developmentChains.includes(network.name)) {
        const VRFCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        VRFCoordinatorV2Address = VRFCoordinatorV2Mock.address
        const tx = await VRFCoordinatorV2Mock.createSubscription()
        const txReceipt = await tx.wait(1)
        subscriptionId = txReceipt.events[0].args.subId
    } else {
        VRFCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2
        subscriptionId = networkConfig[chaindId].subscriptionId
    }

    log("----------------DEPLOYING------------------")
    log("-------------------------------------------")
    const args = [
        VRFCoordinatorV2Address,
        subscriptionId,
        networkConfig[chainId].gasLane,
        networkConfig[chainId].callbackGasLimit,
        ,
        /* tokenUris */ networkConfig[chainId].mintFee,
    ]

    log("-------------------------------------------")
    log("-------------------DONE--------------------")
}

async function handleTokenUris() {
    tokenUris = []

    return tokenUris
}

module.exports.tags = ["all", "basicnft", "main"]
