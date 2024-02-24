import axios from 'axios'
import { accountServices } from './accountServices'



const  Axios = axios.create({
    baseURL: 'http://127.0.0.1:1988',
    // headers:{
    //     Authorization:`Bearer ${accountServices.getToken()}`
    // }
})

Axios.interceptors.request.use( request =>{
    
        request.headers.Authorization = `Bearer ${accountServices.getToken()}`
    
    return request
    
})

export default Axios