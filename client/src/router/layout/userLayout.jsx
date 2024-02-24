import { Outlet } from "react-router-dom";
import UserHeader from "@/components/layout/private/userHeader";
import Footer from "@/components/layout/public/Footer";

const UserLayout = () => {
    return (
        <>
        <span>User Layout</span>
            <UserHeader/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default UserLayout;