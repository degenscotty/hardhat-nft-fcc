const { ethers } = require("hardhat")
require("dotenv").config()

async function mintNft() {
    // Create a wallet instance with your private key
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)

    // Connect the wallet to a provider
    const provider = ethers.provider // Uses Hardhat's default provider
    const signer = wallet.connect(provider)

    checkBalance(signer)

    const randomIpfsNft = await ethers.getContractAt(
        "RandomIpfsNft",
        "0x95201b4dc9b9627FA2de80957CAECE8E02Cd5C31",
        signer
    )

    try {
        const tx = await randomIpfsNft.requestNft({
            value: ethers.utils.parseEther("0.01"),
            gasLimit: 500000,
            maxPriorityFeePerGas: ethers.utils.parseUnits("25", "gwei"), // 25 Gwei
            maxFeePerGas: ethers.utils.parseUnits("50", "gwei"), // 50 Gwei
        })
        const txReceipt = await tx.wait(1)
        console.log("Minted NFT!")
        console.log(txReceipt)
    } catch (error) {
        console.log(error)
    }
}

async function checkBalance(wallet) {
    const balance = await wallet.getBalance()
    console.log(`Wallet balance: ${ethers.utils.formatEther(balance)} ETH`)
}

mintNft()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
