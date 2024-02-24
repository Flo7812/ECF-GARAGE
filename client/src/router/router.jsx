import { Routes, Route } from 'react-router-dom';
import { 
    PublicLayout, Home, Services, SecondHand, Testimonials,CardCar, Login,
    UserLayout, UserHome, CreateCar, ManageCars, ManageTestimonials,
    AdminLayout, AdminHome, CreateUser, ManageUsers, ManageSections,
} from "./index"

import Lost from '@/pages/public/lost';
import AuthGuard from '../_helpers/auth/authGuard';
import AdminGuard from '../_helpers/auth/adminGuard';
// import AuthGuard from '@/_helpers/auth/authGuard';

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
                <Route element={<UserLayout/>}>
                    <Route index element={
                        <AuthGuard>
                            <UserHome/>
                        </AuthGuard>
                    }/>

                    <Route path="/home" element={
                        <AuthGuard>
                            <UserHome/>
                        </AuthGuard>
                    }/>
                    <Route path="/addCar" element={
                        <AuthGuard>
                            <CreateCar/>
                        </AuthGuard>
                    }/>
                    <Route path="/cars" element={
                        <AuthGuard>
                            <ManageCars/>
                        </AuthGuard>
                    }/>
                    <Route path="/testimonials" element={
                        <AuthGuard>   
                            <ManageTestimonials/>
                        </AuthGuard>
                    }/>
                        

                    <Route path="/publicHome" element={
                        <AuthGuard>                      
                            <Home/>
                        </AuthGuard>  
                    }/>
                    <Route path="/services" element={
                        <AuthGuard>
                            <Services/>
                        </AuthGuard>
                    }/>
                    <Route path="/occasions" element={
                        <AuthGuard>
                            <SecondHand/>
                        </AuthGuard>
                    }/>
                    <Route path="/temoignages" element={
                        <AuthGuard>
                            <Testimonials/>
                        </AuthGuard>
                    }/>
                    <Route path='/occasions/fiche/:id' element={
                        <AuthGuard>
                            <CardCar/>
                        </AuthGuard>
                    }/>
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
                    <Route index element={
                        <AuthGuard>
                            <AdminGuard>
                                <AdminHome/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/home" element={
                        <AuthGuard>
                            <AdminGuard>
                                <AdminHome/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/addUser" element={
                        <AuthGuard>
                            <AdminGuard>
                                <CreateUser/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/users" element={
                        <AuthGuard>
                            <AdminGuard>
                                <ManageUsers/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/sections" element={
                        <AuthGuard>
                            <AdminGuard>
                                <ManageSections/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>

                    <Route path="/addCar" element={
                        <AuthGuard>
                            <AdminGuard>
                                <CreateCar/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/cars" element={
                        <AuthGuard>
                            <AdminGuard>
                                <ManageCars/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/testimonials" element={
                        <AuthGuard>
                            <AdminGuard>
                                <ManageTestimonials/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>

                    <Route path="/publicHome" element={
                        <AuthGuard>
                            <AdminGuard>
                                <Home/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/services" element={
                        <AuthGuard>
                            <AdminGuard>
                                <Services/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/occasions" element={
                        <AuthGuard>
                            <AdminGuard>                   
                                <SecondHand/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path="/temoignages" element={
                        <AuthGuard>
                            <AdminGuard>
                                <Testimonials/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>
                    <Route path='/occasions/fiche/:id' element={
                        <AuthGuard>
                            <AdminGuard>                
                                <CardCar/>
                            </AdminGuard>
                        </AuthGuard>
                    }/>

                </Route>
                <Route path="*" element={<Lost/>}/>
            </Routes>      
        </>
    );
};
