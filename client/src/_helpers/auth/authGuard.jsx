
import { Navigate } from 'react-router-dom';
import  { accountServices }  from '@/_services/accountServices' 

const AuthGuard = ({children}) => {


    if(!accountServices.islogged()){
        return <Navigate to={"/user"}/> 
    }
    return children  

};

export default AuthGuard;