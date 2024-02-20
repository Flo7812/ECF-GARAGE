import axios from 'axios'

let token = localStorage.getItem('token')

const Axios = axios.create({
    baseURL: 'http://127.0.0.1:1988',
    headers:{
        'content-Type': 'application/json',
        'Authorization':`Bearer ${token}`//'Bearer '+token  
    }
})

export default Axios