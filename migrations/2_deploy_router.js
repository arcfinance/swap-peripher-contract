const Router = artifacts.require("ARCRouter");


module.exports = function (deployer, network, accounts) {
    return deployer.then(async () => {
        const router = await deployer.deploy(Router, "0x529db273979ed51307fcd655337abB278681C2aE", "0xae13d989dac2f0debff460ac112a837c89baa7cd")

        console.log("Router address: ", router.address)
    })
}
