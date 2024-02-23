
import { Navigate } from 'react-router-dom';
import  { accountServices }  from '../../_services/accountServices.js' 

const AuthGuard = ({children}) => {


    if(!accountServices.islogged()){
        return <Navigate to={"/login"}/> 
    }
    return children  

};

export default AuthGuard;