import { Outlet } from "react-router-dom";
import UserHeader from "@/layout/private/userHeader";
import Footer from "@/layout/Footer";

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