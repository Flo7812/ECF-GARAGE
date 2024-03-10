import Axios from "./callerServices.js"


const getSectionsHome = ()=>{
    return Axios.get('/home')
}
const getSectionsServices = ()=>{
    return Axios.get('/services')
}


export const sectionsServices = {
    getSectionsHome,
    getSectionsServices
} 