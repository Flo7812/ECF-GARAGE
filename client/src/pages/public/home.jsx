import SectionAccueil from "../../layout/public/publicSectionHome";
import SideBarTemoignages from "../../layout/public/publicSideBarTestimonies";
import SideBarOccasions from "../../layout/public/publicSideBarSecondHand"

const Home = () => {
    return (
        <main>
            
            <SideBarOccasions/>
            <SectionAccueil/>
            <SideBarTemoignages/>


        </main>
        
    );
};

export default Home;