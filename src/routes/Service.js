import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import AboutImg from "../assets/sunset.webp";
import Footer from "../components/FooterComponents/Footer";
import Trip from "../components/TripComponents/Trip";

function Service (){
    return(
        <>
            <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg= {AboutImg}
                title = "Service"
                btnClass= "hide"
            />
            <Trip/>
            <Footer/>
        </>
    )
}
export default Service;