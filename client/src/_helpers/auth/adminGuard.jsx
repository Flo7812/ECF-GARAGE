
import { Navigate } from 'react-router-dom';
import  { accountServices }  from '@/_services/accountServices' 

import React from 'react';

const AdminGuard = ({children}) => {

        if(!accountServices.isAdmin()){
            console.log('ici');
            return <Navigate to={"/"}/> 
        }
        return children  
};

export default AdminGuard;