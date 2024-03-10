import Axios from "./callerServices.js"



const getValidateTestimonials =()=>{
    return Axios.get('/testimonials')
}
const addTestimony = (datas)=>{
    return Axios.put('/user/testimonials',datas)
}
const getToValidateTestimonials = ()=>{
    return Axios.get('/user/testimonials')
}



export const testimonyServices = {
    addTestimony,
    getValidateTestimonials,
    getToValidateTestimonials
}