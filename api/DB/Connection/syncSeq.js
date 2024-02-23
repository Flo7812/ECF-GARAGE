const GVP = require('./GVP')

async function sync(){
    require('../Models/index')
    await GVP.authenticate()
    await GVP.sync()
        .then(()=> console.log('DB synchronization OK'))
        .catch(e=> console.log('Synchronization DB ERROR:',e))
    }
sync()

