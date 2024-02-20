import { useNavigate } from "react-router-dom"
import Axios from "../_helpers/auth/axios"


const addUser = (datas)=>{
    return Axios.put('/admin/users', datas)
}
const getUser = ()=>{
    return Axios.get('/admin/users')
}
const getUsers = ()=>{
    return Axios.get('/admin/users')
}



const addCar =(datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const getCar =()=>{
    return Axios.get('/admin/users')
}
const getCars =()=>{
    return Axios.get('/admin/users')
}



const addTestimony =(datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const getTestimony =()=>{
    return Axios.get('/admin/users')
}
const getTestimonials =()=>{
    return Axios.get('/admin/users')
}


const addShedules =(datas)=>{
    return Axios.put('/user/cardsCars',datas)
}
const getShedules =()=>{
    return Axios.get('/admin/users')
}








const saveToken = (token)=>{
    localStorage.setItem('token',token)
}
const saveUsername = (username)=>{
    localStorage.setItem('username', username)
}
const saveName = (name)=>{
    localStorage.setItem('name',name)
}
const saveRole = (role)=>{
    localStorage.setItem('role',role)
}







const axlogin = (log)=>{
    return Axios.post('/login',log)
}

const logout = ()=>{
    localStorage.removeItem('token') 
    localStorage.removeItem('name') 
    localStorage.removeItem('role') 
    localStorage.removeItem('username')
    return 

}

const islogged = async()=>{
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if(!token){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/login')
    }
    console.log('isLogged control');
    return !!token

}

const isAdmin = ()=>{
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    if(!role){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/')
    }else
    if(role === '1'){
        console.log('isAdmin control');
        return !!role
    }
}

const displayUsername = ()=>{
    const username = localStorage.getItem('username')
    return username
}


export  const accountServices = {
    axlogin, 
    logout, 
    islogged, 
    isAdmin,
    saveToken, 
    saveRole, 
    saveUsername, 
    saveName, 
    displayUsername, 
    addCar,
    getCar,
    getCars,
    addUser,
    getUser,
    getUsers,
    addTestimony,
    getTestimony,
    getTestimonials,
    addShedules,
    getShedules
}