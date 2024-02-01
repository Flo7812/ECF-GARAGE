import { Outlet } from "react-router-dom";
import AdminHeader from "@/layout/private/adminHeader";
import Footer from "@/layout/Footer";

const AdminLayout = () => {
    return (
        <>
            <span>Admin layout</span>
            <AdminHeader/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default AdminLayout;