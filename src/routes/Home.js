import Destination from "../components/DestinationComponents/Destination";
import Footer from "../components/FooterComponents/Footer";
import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";
import Trip from "../components/TripComponents/Trip";

function Home (){
    return(
        <>  
            <Navbar/>
            <Hero
                cName = "hero"
                heroImg= "https://furtherafrica.com/content-files/uploads/2022/10/ethiopia_science_museum001.jpg"
                title = "Our Journey begins here"
                text = "Come and explore our finest achievements."
                buttonText = "Let's Explore Together"
                url = "/"
                btnClass= "show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}
export default Home;