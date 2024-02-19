import React from 'react';

import { Navigate } from 'react-router-dom';
import  { accountServices }  from '../../_services/accountServices' 


const AdminGuard = ({children}) => {

        if(!accountServices.isAdmin()){
            return <Navigate to={"/"}/> 
        }
        return children  
};

export default AdminGuard;