const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const toFirstStrUppC = require('../../../Utils/toFirstStringUpperCase');

const Model = sequelize.define('car_model',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    serie:{
        type: DataTypes.STRING,
        defaultValue:''
    },  
    description:{
        type: DataTypes.STRING,
        deaultValue: ''
    }
},{paranoid: true})


Model.getId = async function(name, ser, des){
        const md = toFirstStrUppC(name)
        const model = await Model.findOne({where:{name : md, serie: ser, description: des}})
        if(!!model){
            return model.id
        }else{
            return
            // throw new Error("this model with this id doesn\'t exist ")
        }
}

Model.getByName = async function(n){
    const name = toFirstStrUppC(n)
    const model = await Model.findOne({where:{name : name}})
    if(!!model){
        return model 
    }else{
        return
        // throw new Error("this model with this name doesn\'t exist")
    }
}

Model.add = async function(body){
    const name = toFirstStrUppC(body.name)
    const mdl = await Model.findOne({where:{name : name, serie: body.serie, description : body.description }})
    if(!!mdl){
        return
    }else{
        const model= await Model.getByName(name)
        if(!!model){
            if(body.serie !== ''){
                const serie = await Model.findOne({where:{name : name, serie: body.serie }})
                if(!!serie){
                    if(body.description !== ''){
                        const newModel = await Model.create({name : name, serie: body.serie, description : body.description })
                        return newModel
                    }else{
                        return
                    }
                }
            }else{
                return
            }
        }else{
            const newModel = await Model.create({name : name, serie: body.serie, description : body.description })
            return newModel
        }
    } 
}


module.exports = Model
// console.log(Model === sequelize.models.Model);