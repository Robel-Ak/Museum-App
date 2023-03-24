import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import AboutImg from "../assets/4.jpg";
import Footer from "../components/FooterComponents/Footer";
import ContactForm from "../components/ContactFormComponents/ContactForm";

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
            <ContactForm />
            <Footer/>
        </>
    )
}
export default Contact;