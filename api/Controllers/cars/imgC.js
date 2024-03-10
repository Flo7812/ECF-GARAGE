const {Image} = require('../../DB/Models/index')
// const fs = require('fs')

exports.getImgByName = async function(req, res){
    try {
        const image = await Image.findOne({where:{img1description : req.body.name}})
        if(!!image){
            return res.json({image : image})
        }
        return res.json({message: 'need to create this image'})
    } catch (error) {
        return res.status(500).json({message:'unable to find this image' })
    }
}




exports.addImages = async function (req, res){
    try {
        if(req.files.img1 === undefined){
            return res.status(400).json({message: "data(s) missing images"})
        }
        console.log(req.files);
        let img1 = req.files.img1[0].buffer
        let img1description = req.files.img1[0].originalname
        let img2 
        let img2description
        let img3 
        let img3description
        let img4 
        let img4description
        let img5
        let img5description
        req.files.img2 === undefined ? img2 = ''  : img2 = req.files.img2[0].buffer;
        req.files.img2 === undefined ? img2description = ''  : img2description = req.files.img2[0].originalname;
        req.files.img3 === undefined ? img3 = ''  : img3 = req.files.img3[0].buffer;
        req.files.img3 === undefined ? img3description = ''  : img3description = req.files.img3[0].originalname;
        req.files.img4 === undefined ? img4 = '' :  img4 = req.files.img4[0].buffer;
        req.files.img4 === undefined ? img4description = ''  : img4description = req.files.img4[0].originalname;
        req.files.img5 === undefined ? img5 = ''  : img5 = req.files.img5[0].buffer;
        req.files.img5 === undefined ? img5description = ''  : img5description = req.files.img5[0].originalname;

        const gallery = {
            img1,
            img1description,
            img2,
            img2description,
            img3,
            img3description,
            img4,
            img4description,
            img5,
            img5description
        }

        const img = await Image.findOne({where:{img1description : img1description}})
        if(!!img){
            return res.json({message: "image(s) deja existante", imgId : img.id})
        }

        const newImages = await Image.create(gallery)
        res.status(200).json({id: newImages.id, message: 'success upload image(s)'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Database error upload Images', error: error})
    }
    
}

exports.deleteImages = async function(req, res){
    let imgId = parseInt(req.params.id)
    if(!imgId){
        return res.status(400).json({message: "id parameter missing"})
    }
    Image.destroy({where: {id:imgId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(e => res.status(500).json({message: "Error Database to destroy images", error: e}))
}
