const express = require('express')
let router = express.Router()
const cardCar_router = require('./car_UR')
const {getCardsCars, addCar, updateCar, logiqueDeleteCar, restoreCarById, getDeletedCars, deleteCar} = require('../../../../Controllers/cars/carsC')
const {addImages, deleteImages} = require('../../../../Controllers/cars/imgC')
const multer = require('multer');
// const checkTokenAccess = require('../../../../Middleware/in/checkTokenAccess')

const upload = multer()
// router.use(checkTokenAccess)

router.use('/cardCar', cardCar_router)


router.get('', getCardsCars)


router.put('', addCar);  
router.put('/images', upload.fields([
    {name: 'img1', maxCount:1},
    {name: 'img2', maxCount:1}, 
    {name: 'img3', maxCount:1}, 
    {name: 'img4', maxCount:1}, 
    {name: 'img5', maxCount:1}

]), addImages );  

router.patch('/:id',updateCar);

router.delete('/:id', logiqueDeleteCar);
router.delete('/images/:id', deleteImages);


router.post('/:id', restoreCarById);

router.delete('/trash/:id', deleteCar);

// get deleted cars /***in progress ***/
router.get('/deleted', getDeletedCars); 

module.exports = router