const  {Section, SectionPage}  = require('../../DB/Models/index');

exports.getSectionsHome = async(req, res)=> {
    try {
        const sections = await Section.findAll({where:{page:'1'}})
        if(!!sections){
            sections.map(section=>{
                section.img = section.img.toString('base64')
            })
            return res.status(200).json({data: sections})
        }
        return res.status(409).json({message: 'pas de sections?!'})
    } catch (error) {
        return res.status(500).json({message: 'Database Error sections', error: error})
    }

}

exports.getSectionsServices = async(req, res)=> {
    try {
        const sections = await Section.findAll({where:{page:'2'}})
        if(!!sections){
            return res.status(200).json({data: sections})
        }
        return res.status(409).json({message: 'pas de sections?!'})
    } catch (error) {
        return res.status(500).json({message: 'Database Error sections', error: error})
    }

}


