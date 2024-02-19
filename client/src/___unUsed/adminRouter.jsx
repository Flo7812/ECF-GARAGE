/* import { Routes, Route } from 'react-router-dom';
import { AdminLayout, AdminHome, CreateUser, ManageUser, ManageSection,
    CreateCars, ManageCars, ManageTestimony,
    Home, Services, SecondHand, Testimony, 
} from "../pages/router/index"
import Lost from '../pages/public/lost';

const AdminRouter = () => {
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

export default AdminRouter; */