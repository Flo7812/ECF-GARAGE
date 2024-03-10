import Axios from "./callerServices.js"


const getCars = ()=>{
    return Axios.get('/user/cardsCars')
}
const getPublicCars = ()=>{
    return Axios.get('/cars')
}
const getCar = (cid)=>{
    return Axios.get('/user/cardsCars/'+cid)
}
const addCar = (datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const patchCar = (cid)=>{
    return Axios.patch('/user/cardsCars/'+cid)
}
const logiqueDeleteCar = (cid)=>{
    return Axios.post('/user/cardsCars/'+cid)
}
const deleteImages = (iid)=>{
    return Axios.delete('/user/cardsCars/images/'+iid)
}
const deleteCar = (cid)=>{
    return Axios.post('/user/cardsCars/'+cid)
}
const addImages = (datas)=>{
    return Axios.put('/user/cardsCars/images', datas)
}



export const carServices = {
    getCar,
    getCars,
    addCar,
    patchCar,
    logiqueDeleteCar,
    deleteCar,
    addImages, 
    deleteImages, 
    getPublicCars
}