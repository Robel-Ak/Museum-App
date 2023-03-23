import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import AboutImg from "../assets/sunset.webp";

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
        </>
    )
}
export default Service;