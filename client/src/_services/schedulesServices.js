import Axios from "./callerServices.js"



const addShedules =(datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const getShedules =()=>{
    return Axios.get('/admin/users')
}




export const userServices = {
    addShedules,
    getShedules
}