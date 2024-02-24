import {Outlet} from "react-router-dom";
import PublicHeader from "@/components/components/layout/public/publicHeader";
import Footer from "@/components/components/layout/public/Footer";

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