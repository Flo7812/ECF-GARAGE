// import { useNavigate } from "react-router-dom"
import Axios from "./callerServices.js"


const saveToken = (token)=>{
    localStorage.setItem('token',token)
}
const getToken = ()=>{
    return localStorage.getItem('token')
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
    // const navigate = useNavigate()
    let token = localStorage.getItem('token')
    // if(!token){
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('username')
    //     localStorage.removeItem('role')
    //     navigate('/login')
    // }
    console.log('isLogged control');
    if(!!token){
        return !!token
    }
    

}

const isAdmin = ()=>{
    // const navigate = useNavigate()
    let role = localStorage.getItem('role')
    /* if(!role){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        navigate('/')
    }else
    if(role === '1'){
        return !!role
    } */
    console.log('isAdmin control');
    if(!!role){
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
    getToken,
    saveRole, 
    saveUsername, 
    saveName, 
    displayUsername, 



}