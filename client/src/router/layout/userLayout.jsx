import { Outlet } from "react-router-dom";
import UserHeader from "@/components/components/layout/private/userHeader";
import Footer from "@/components/components/layout/public/Footer";

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