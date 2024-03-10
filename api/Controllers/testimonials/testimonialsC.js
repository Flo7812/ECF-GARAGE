const Testimony = require('../../DB/Models/Testimony/testimony')
// const TestimonyStatus = require('../../DB/Models/Testimony/testimonyStatus')

exports.getValidateTestimonials = async(req, res)=>{
    try {
        const testimonials = await Testimony.findAll({where:{status:'1'}})
        if(!!testimonials){
            return res.status(200).json({data: testimonials})
        }
        return res.status(404).json({message: 'pas de temoignages validés', error: error})
    } catch (error) {
        return res.status(500).json({message: 'Database error testimonials', error: error})
    }
    
}
exports.getToValidateTestimonials  = async(req, res)=>{
    try {
        const testimonials = await Testimony.findAll({where:{status:'2'}})
        if(!!testimonials){
            return res.status(200).json({data: testimonials})
        }
        return res.status(404).json({message: 'pas de temoignages à valider', error: error})

    } catch (error) {
        return res.status(500).json({message: 'Database error testimonials', error: error})
    }
    
}