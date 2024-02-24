import SectionHome from "@/components/components/layout/public/publicSectionHome";
import SideBarTestimonials from "@/components/components/layout/public/publicSideBarTestimonials";
import SideBarSecondHand from "@/components/components/layout/public/publicSideBarSecondHand"

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