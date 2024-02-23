import axios from 'axios'
import { accountServices } from './accountServices.js'



const  Axios = axios.create({
    baseURL: 'http://127.0.0.1:1988',
    // headers:{
    //     Authorization:`Bearer ${accountServices.getToken()}`
    // }
})

Axios.interceptors.request.use(async request =>{
    if(accountServices.islogged()){
        request.headers.Authorization = `Bearer ${accountServices.getToken()}`

        
    }else{
        console.log('ici');
    }
    return request
    
})

export default Axios