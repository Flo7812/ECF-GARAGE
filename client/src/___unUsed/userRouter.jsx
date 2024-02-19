/* import { Routes, Route } from 'react-router-dom';
import { UserLayout, UserHome, CreateCars, ManageCars, ManageTestimony,
    Home, Services, SecondHand, Testimony, 
} from "../pages/router/index"
import Lost from '../pages/public/lost';

const UserRouter = () => {

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

export default UserRouter; */