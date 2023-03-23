import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import AboutImg from "../assets/3.jpg";
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
        </>
    )
}
export default About;