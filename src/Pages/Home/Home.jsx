import AboutUS from "./AboutUS";
import Banner from "./Banner";
import ContactInfo from "./ContactInfo";
import OurTeam from "./OurTeam";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUS/>
            <Services/>
            <ContactInfo/>
            <OurTeam/>
        </div>
    );
};

export default Home;