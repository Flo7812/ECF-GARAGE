import Axios from "./callerServices.js"


const getCars = ()=>{
    return Axios.get('/user/cardsCars/'+cid)
}
const getCar = ()=>{
    return Axios.get('/user/cardsCars/'+cid)
}
const addCar = (datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const patchCar = ()=>{
    return Axios.patch('/user/cardsCars/'+cid)
}
const softDeleteCar = ()=>{
    return Axios.post('/user/cardsCars/'+cid)
}
const trashDeleteCar = ()=>{+cid
    return Axios.post('/user/cardsCars/'+cid)
}



export const carServices = {
    getCar,
    getCars,
    addCar,
    patchCar,
    softDeleteCar,
    trashDeleteCar
}