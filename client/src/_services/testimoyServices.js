import Axios from "./callerServices.js"


const getTestimony =()=>{
    return Axios.get('/admin/users')
}
const getTestimonials =()=>{
    return Axios.get('/admin/users')
}
const addTestimony = (datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const validateTestimony = (datas)=>{
    return Axios.put('/user/cardsCars',datas)
}



export const userServices = {
    addTestimony,
    getTestimony,
    getTestimonials,
    validateTestimony
}