import { Outlet } from "react-router-dom";
import AdminHeader from "@/components/components/layout/private/adminHeader";
import Footer from "@/components/components/layout/public/Footer";


const AdminLayout = () => {
    return (
        <>
            <span>Admin layout</span>
            
            <AdminHeader/>
            <Outlet />
            <Footer/>
        </>
        
    );
};

export default AdminLayout;