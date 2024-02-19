/* import { Routes, Route } from 'react-router-dom'
import { PublicLayout, Home, Services, SecondHand, Testimony, Login } from "../pages/router/index"
import Lost from '../pages/public/lost';

const PublicRouter = () => {

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

export default PublicRouter; */