import React from 'react';

import { Navigate } from 'react-router-dom';
import  { accountServices }  from '../../_services/accountServices.js' 


const AdminGuard = ({children}) => {

        if(!accountServices.isAdmin()){
            return <Navigate to={"/"}/> 
        }
        if(accountServices.isAdmin() === '1'){
            return children  
        }
        else{
            return <Navigate to={"/login"}/>
        }
};

export default AdminGuard;