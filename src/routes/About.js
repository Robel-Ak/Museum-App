import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/FooterComponents/Footer";
import AboutUs from "../components/AboutUsComponents/AboutUs";
function About (){
    return(
        <>
           <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg= {AboutImg}
                title = "About"
                btnClass= "hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}
export default About;