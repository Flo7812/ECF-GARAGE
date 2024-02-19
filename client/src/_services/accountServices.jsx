import { useNavigate } from "react-router-dom"


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

export  const accountServices = {
    islogged, isAdmin,saveRole, saveName, saveToken, saveUsername, logout
}