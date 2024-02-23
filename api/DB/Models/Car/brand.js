const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const toFSU = require('../../../Utils/toFirstStringUpperCase')

const Brand = sequelize.define('car_brand',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    paranoid: true,
    freezeTableName: true
})


/************* Get All *********************/

Brand.getNames = async function(){

        const allBrands = []
        const brands = await Brand.findAll()
        for (const brand of brands) {
            allBrands.push(brand.name)    
            }
        return allBrands

}

Brand.getIds = async function(){

        
        const brands = await Brand.findAll({attributes: [id]})
        const allBrands = brands.map(brand => brand.id)
        return allBrands

}

/************* Get One *********************/

Brand.getName = async function(id){

    const brand = await Brand.findByPk(id)
    if(brand){
        return brand.name
    }else{
        return
    }
    
}

Brand.getId = async function(n){

    const name  = toFSU(n)
    const brand = await Brand.findOne({where:{name : name}})
    if(brand){
        return brand.id
    }
    else{
        return
    }
    

}


Brand.uptdateByName = async function(values, n){
    const name = toFSU((n))
    const br = await Brand.findOne({where:{name : name}})
    if(br){
        const updatedBrand = await Brand.update(values, {where: {name : name}})
        return updatedBrand
    }else{
        return
    }
}


Brand.uptdateById = async function(name, id){

    const brand = await Brand.findByPk(id)
    if(brand){
        const updatedBrand = await Brand.update(name, {where: {id : id}})
        return updatedBrand
    }else{
        return
    }
}


Brand.getAllDeleted= async function(){
    try {
        const deletedBrands = await Brand.findAll({where: { deletedAt: { [Op.ne]: null } }})
        return deletedBrands
    } catch (error) {
        console.log(`Error from Model Brand : Can\'t find deleted brand(s)`, error)
    }
}

module.exports = Brand
// console.log(Brand === sequelize.models.Brand);
