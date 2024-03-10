import Axios from "./callerServices.js"

const getUsers = ()=>{
    return Axios.get('/admin/dashboard')
}
const getUser = ()=>{
    return Axios.get('/admin/users/'+uid)
}
const addUser = (datas)=>{
    return Axios.put('/admin/users', datas)
}
const updateUser = ()=>{
    return Axios.patch('/admin/users/'+uid)
}
const logiqueDeleteUser = ()=>{
    return Axios.post('/admin/users/'+uid)
}
const deleteUser = ()=>{
    return Axios.post('/admin/users/'+uid)
}



export const userServices = {
    getUser,
    getUsers,
    addUser,
    updateUser,
    logiqueDeleteUser,
    deleteUser

}