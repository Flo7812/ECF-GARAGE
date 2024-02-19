

const loginTime = (req, res, next) =>{

    res.on('finish', async()=> {
        if(req.body.token){
            const event = new Date
            console.log(`${req.body.name} has connected to :`,event.toString());
        }else{
            console.log('UnAuthorized access');
        }
})
    next()  
}
module.exports = loginTime