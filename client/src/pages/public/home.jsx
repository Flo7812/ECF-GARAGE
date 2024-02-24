import SectionHome from "@/components/layout/public/publicSectionHome";
import SideBarTestimonials from "@/components/layout/public/publicSideBarTestimonials";
import SideBarSecondHand from "@/components/layout/public/publicSideBarSecondHand"

const Home = () => {
    return (
        <main>
            
            <SideBarSecondHand/>
            <SectionHome/>
            <SideBarTestimonials/>


        </main>
        
    );
};

export default Home;