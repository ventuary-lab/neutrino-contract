const deployHelper = require('../../neutrino-api/ContractHelper.js').ContractHelper;

const wvs = 10 ** 8;

const symbolNeutrino = "USD-TN"
const symbolBase = "TNSBT"
const descriptionNeutrino = "USD test neutrino asset" 
const descriptionBase = "test base token asset" 
const nodeAddress = ""

describe('Deploy', async function () {
    it('Deploy', async function () {
        const result = await deployHelper.deploy(env.SEED, env.API_BASE, env.CHAIN_ID, "./script/", symbolNeutrino, symbolBase, descriptionNeutrino, descriptionBase, nodeAddress, true) 
        console.log(JSON.stringify(result))
    });
})
