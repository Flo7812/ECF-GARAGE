const express = require('express')
let router = express.Router()
// const car_router = require('./car')
const { /* getCardCar, */ getCarsByMotorId, getCarsByModelId, getCarsByBrandId, getCardsCars } = require('../../Controllers/cars/carsC')




// router.use('/car/:id', getCardCar/* car_router */)


router.get('', getCardsCars); 



router.get('/brand/:id', getCarsByBrandId);

router.get('/model/:id', getCarsByModelId);

router.get('/motor/:id', getCarsByMotorId);

router.get('/motor/:name', getCarsByMotorId);





module.exports = router 