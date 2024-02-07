export default class Car{

    constructor(brand, model, kilometers, image, seller, motor, modifiedAt = '', createdAt = ''){
        
        brand = this.brand,
        model = this.model,
        kilometers = this.kilometers,
        image = this.image,
        seller = this.seller,
        motor = this.motor,
        modifiedAt = new Date,
        createdAt = new Date
    }
    
}