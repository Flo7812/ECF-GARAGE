/* --- Puclic Index Routes Pages ---*/

export {default as PublicLayout } from "./layout/publicLayout"
export {default as Home } from "@/pages/public/home"
export {default as Services } from "@/pages/public/services"
export {default as SecondHand } from "@/pages/public/secondHand"
export {default as Testimony } from "@/pages/public/testimony"
export {default as Login } from "@/pages/public/login"

/*--- Private User Index Routes Pages ---*/

export {default as UserLayout} from './layout/userLayout';
export {default as UserHome} from '@/pages/private/userHome';
export {default as CreateCars} from '@/pages/private/createCars';
export {default as ManageCars} from '@/pages/private/manageCars';
export {default as ManageTestimony} from '@/pages/private/manageTestimony';

/*--- Private Admin Index Routes Pages ---*/

export { default as AdminLayout} from "./layout/adminLayout"
export { default as AdminHome} from "@/pages/private/admin/adminHome"
export { default as CreateUser} from "@/pages/private/admin/createUser"
export { default as ManageUser} from "@/pages/private/admin/manageUser"
export { default as ManageSection} from "@/pages/private/admin/manageSection"