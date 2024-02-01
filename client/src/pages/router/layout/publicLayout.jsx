import {Outlet} from "react-router-dom";
import PublicHeader from "@/layout/public/publicHeader";
import Footer from "@/layout/Footer";

const PublicLayout = () => {
    return (
        <> 
            <span>Layout Public</span>
            <PublicHeader/>
            <Outlet/>
            <Footer/>
        </>
            
    );
};

export default PublicLayout;