/* --- Puclic Index Routes Pages ---*/

export {default as PublicLayout } from "@/router/layout/publicLayout"
export {default as Home } from "@/pages/public/home"
export {default as Services } from "@/pages/public/services"
export {default as SecondHand } from "@/pages/public/secondHand"
export {default as Testimonials } from "@/pages/public/testimonials"
export {default as CardCar } from "@/pages/public/cardCar"
export {default as Login } from "@/pages/auth/login"

/*--- Private User Index Routes Pages ---*/

export {default as UserLayout} from '@/router/layout/userLayout';
export {default as UserHome} from '@/pages/private/userHome';
export {default as CreateCar} from '@/pages/private/createCar';
export {default as ManageCars} from '@/pages/private/manageCars';
export {default as ManageTestimonials} from '@/pages/private/manageTestimonials';

/*--- Private Admin Index Routes Pages ---*/

export { default as AdminLayout} from "@/router/layout/adminLayout"
export { default as AdminHome} from "@/pages/private/admin/adminHome"
export { default as CreateUser} from "@/pages/private/admin/createUser"
export { default as ManageUsers} from "@/pages/private/admin/manageUsers"
export { default as ManageSections} from "@/pages/private/admin/manageSections"