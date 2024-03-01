const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');

const Image = sequelize.define('car_images',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    img1:{
        type: DataTypes.BLOB,
        allowNull: false
    },
    img1description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    img2:{type: DataTypes.BLOB},
    img2description:{type: DataTypes.STRING},
    img3:{type: DataTypes.BLOB},
    img3description:{type: DataTypes.STRING},
    img4:{type: DataTypes.BLOB},
    img4description:{type: DataTypes.STRING},
    img5:{type: DataTypes.BLOB},
    img5description:{type: DataTypes.STRING}
},{
    paranoid: true,
    freezeTableName: true
})

/* Image.add = async function(datas){
    try {
        console.log(datas);
        let img1 = datas.files.img1[0].buffer
        let img1description = datas.files.img1[0].originalname
        let img2 
        let img2description
        let img3 
        let img3description
        let img4 
        let img4description
        let img5
        let img5description
        datas.files.img2 === undefined ? img2 = null  : img2 = datas.files.img2[0].buffer;
        datas.files.img2 === undefined ? img2description = null  : img2description = datas.files.img2[0].originalname;
        datas.files.img3 === undefined ? img3 = null  : img3 = datas.files.img3[0].buffer;
        datas.files.img3 === undefined ? img3description = null  : img3description = datas.files.img3[0].originalname;
        datas.files.img4 === undefined ? img4 = null :  img4 = datas.files.img4[0].buffer;
        datas.files.img4 === undefined ? img4description = null  : img4description = datas.files.img4[0].originalname;
        datas.files.img5 === undefined ? img5 = null  : img5 = datas.files.img5[0].buffer;
        datas.files.img5 === undefined ? img5description = null  : img5description = datas.files.img5[0].originalname;

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
        await Image.create(gallery)
        return
        
    } catch (error) {
        console.log('error from Image.add for init Dbtable', error);
    }
    
} */

module.exports = Image