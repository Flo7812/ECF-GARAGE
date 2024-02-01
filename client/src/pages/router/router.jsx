import { Routes, Route } from 'react-router-dom';
import { 
    PublicLayout, Home, Services, SecondHand, Testimony, Login,
    UserLayout, UserHome, CreateCars, ManageCars, ManageTestimony,
    AdminLayout, AdminHome, CreateUser, ManageUser, ManageSection,
} from "./index"

import Lost from '@/pages/public/lost';

export const PublicRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/occasions" element={<SecondHand/>}/>
                    <Route path="/temoignages" element={<Testimony/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route path='*' element={<Lost/>}/>
            </Routes>
        </>  
    );
};


export const UserRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<UserLayout/>}>
                    <Route index element={<UserHome/>}/>

                    <Route path="/home" element={<UserHome/>}/>
                    <Route path="/addCars" element={<CreateCars/>}/>
                    <Route path="/cars" element={<ManageCars/>}/>
                    <Route path="/testimonies" element={<ManageTestimony/>}/>

                    <Route path="/publicHome" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/occasions" element={<SecondHand/>}/>
                    <Route path="/temoignages" element={<Testimony/>}/>

                </Route>
                <Route path="*" element={<Lost/>}/>
            </Routes>      
        </>
    );
};


export const AdminRouter = () => {
    
    return (
        <>
            <Routes>
                <Route element={<AdminLayout/>}>
                    <Route index element={<AdminHome/>}/>

                    <Route path="/home" element={<AdminHome/>}/>
                    <Route path="/addUser" element={<CreateUser/>}/>
                    <Route path="/users" element={<ManageUser/>}/>
                    <Route path="/sections" element={<ManageSection/>}/>

                    <Route path="/addCars" element={<CreateCars/>}/>
                    <Route path="/cars" element={<ManageCars/>}/>
                    <Route path="/testimonies" element={<ManageTestimony/>}/>

                    <Route path="/publicHome" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/occasions" element={<SecondHand/>}/>
                    <Route path="/temoignages" element={<Testimony/>}/>

                </Route>
                <Route path="*" element={<Lost/>}/>
            </Routes>      
        </>
    );
};
