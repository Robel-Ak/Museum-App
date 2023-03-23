import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import AboutImg from "../assets/4.jpg";

function Contact (){
    return(
        <>
            <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg= {AboutImg}
                title = "Contact"
                btnClass= "hide"
            />
        </>
    )
}
export default Contact;