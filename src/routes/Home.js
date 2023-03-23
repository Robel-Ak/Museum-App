import Hero from "../components/HeroComponents/Hero";
import Navbar from "../components/NavbarComponents/Navbar";

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
        </>
    )
}
export default Home;