const GVPE = require('../../Connection/GVP')

async function initSeqAfterShell(GVPE){
    try {
        const GVPE = require('../../Connection/GVP')
        await GVPE.authenticate()
            .then(()=> console.log('Sequelize connect success'))
            .catch(e=> console.log('Unable to connect Sequelize ERROR:',e))
        require('../../Models/index')
        await GVPE.sync({alter:true})
            .then(()=> console.log('Sequelize synchronization success'))
            .catch(e=> console.log('Unable to synchronization  Sequelize ERROR:',e))    
    } catch (error) {
        console.log('Sequelize ERROR:',error);
    }
    try {
        console.log('ici')
        await require('./initDBTables')
    } catch (error) {
        console.log('Instances Tables ERROR:',error);
    }
}
module.exports = initSeqAfterShell(GVPE)