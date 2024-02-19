import { Routes, Route } from 'react-router-dom';
import { 
    PublicLayout, Home, Services, SecondHand, Testimonials,CardCar, Login,
    UserLayout, UserHome, CreateCar, ManageCars, ManageTestimonials,
    AdminLayout, AdminHome, CreateUser, ManageUsers, ManageSections,
} from "./index"

import Lost from '@/pages/public/lost';
import AuthGuard from '@/_helpers/auth/authGuard';

export const PublicRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/occasions" element={<SecondHand/>}/>
                    <Route path="/temoignages" element={<Testimonials/>}/>
                    <Route path='/occasions/fiche/:id' element={<CardCar/>}/>
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
                {/* <AuthGuard> */}
                    <Route element={<UserLayout/>}>
                        <Route index element={<UserHome/>}/>

                        <Route path="/home" element={<UserHome/>}/>
                        <Route path="/addCar" element={<CreateCar/>}/>
                        <Route path="/cars" element={<ManageCars/>}/>
                        <Route path="/testimonials" element={<ManageTestimonials/>}/>
                        

                        <Route path="/publicHome" element={<Home/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/occasions" element={<SecondHand/>}/>
                        <Route path="/temoignages" element={<Testimonials/>}/>
                        <Route path='/occasions/fiche/:id' element={<CardCar/>}/>

                    </Route>
                    <Route path="*" element={<Lost/>}/>
                {/* </AuthGuard> */}
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
                    <Route path="/users" element={<ManageUsers/>}/>
                    <Route path="/sections" element={<ManageSections/>}/>

                    <Route path="/addCar" element={<CreateCar/>}/>
                    <Route path="/cars" element={<ManageCars/>}/>
                    <Route path="/testimonials" element={<ManageTestimonials/>}/>

                    <Route path="/publicHome" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/occasions" element={<SecondHand/>}/>
                    <Route path="/temoignages" element={<Testimonials/>}/>
                    <Route path='/occasions/fiche/:id' element={<CardCar/>}/>

                </Route>
                <Route path="*" element={<Lost/>}/>
            </Routes>      
        </>
    );
};
