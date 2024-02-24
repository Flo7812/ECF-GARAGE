import {Outlet} from "react-router-dom";
import PublicHeader from "@/components/layout/public/publicHeader";
import Footer from "@/components/layout/public/Footer";

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