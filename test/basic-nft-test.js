const { assert } = require("chai")
const { developmentChains } = require("../helper-hardhat-config")
const { network, ethers, deployments } = require("hardhat")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("BasicNft", function () {
          beforeEach(async function () {
              accounts = await ethers.getSigners()
              deployer = accounts[0]

              await deployments.fixture(["basicnft"])
              basicNft = await ethers.getContract("BasicNFT")
          })

          describe("Constructor", async function () {
              it("Initializes the ERC721 token correctly with name, symbol and tokenCounter.", async function () {
                  const name = await basicNft.name()
                  const symbol = await basicNft.symbol()
                  const tokenCounter = await basicNft.getTokenCounter()

                  assert.equal(name, "Dogie")
                  assert.equal(symbol, "DOG")
                  assert.equal(tokenCounter.toString(), 0)
              })
          })

          describe("Mint Function.", async function () {
              let previousTokenCounter
              beforeEach(async function () {
                  const tx = await basicNft.mintNFT()
                  await tx.wait(1)
                  previousTokenCounter = await basicNft.getTokenCounter()
              })

              it("Tokencounter Increased.", async function () {
                  const tokenCounter = await basicNft.getTokenCounter()
                  assert.equal(previousTokenCounter, tokenCounter.toString())
              })

              it("Token URI is correct.", async function () {
                  const tokenURI = await basicNft.TOKEN_URI()
                  assert.equal(tokenURI, await basicNft.tokenURI(0))
              })

              it("Show the correct balance and owner of an NFT", async function () {
                  const deployerAddress = deployer.address
                  const deployerBalance = await basicNft.balanceOf(deployerAddress)
                  const owner = await basicNft.ownerOf("0")

                  assert.equal(deployerBalance.toString(), "1")
                  assert.equal(owner, deployerAddress)
              })
          })
      })
