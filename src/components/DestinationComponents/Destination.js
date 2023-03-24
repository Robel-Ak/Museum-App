import firstImg from "../../assets/6.jpg";
import secondImg from "../../assets/7.jpg";
import thirdImg from "../../assets/zoma1.png";
import fourthImg from "../../assets/zoma2.jpg";
import fifthImg from "../../assets/red1.jpg";
import sixthImg from "../../assets/red2.png";
import seventhImg from "../../assets/nat1.png";
import eigthImg from "../../assets/nat2.png";
import ninthmg from "../../assets/unity1.jpg";
import tenthImg from "../../assets/unity2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tour the vibrant capital city of Ethiopia.</p>
            <DestinationData
                className="first-des"
                heading="Ethiopia's Science and Art Museum"
                text="It is said that the dome-shape architecture signifies “continuous growth and man kind's creativity,”
                 according to the Ethiopian News Agency Report.  It is also portrayed as an expression of Ethiopia's 
                 determination to adapt to ever growing technological development."
                img1 = {firstImg} 
                img2 = {secondImg} 
            />
            <DestinationData
                className="first-des-reverse"
                heading="ZOMA MUSEUM"
                text="a dream inspired 25 years ago  by the timeless and structurally sound vernacular architecture of Ethiopia and other parts of the world. It is named after Zoma Shiferraw, a young artist  who died of cancer in 1979. 
                The museum  acts as a bridge between artists and architects from around the world to create cutting-edge ecological art and architecture. In this context, Zoma Museum is built using ancient yet still existing construction techniques. The building materials include mud, straw, stone, wood, and cement.  "
                img1 = {thirdImg} 
                img2 = {fourthImg} 
            />
            <DestinationData
                className="first-des"
                heading="Red Terror Martyrs' Memorial Museum"
                text="established in 2010 as a memorial to those who died during the Red Terror under the Derg government. The museum has displays of torture instruments, skulls and bones, coffins, bloody clothes and photographs of victims."
                img1 = {fifthImg} 
                img2 = {sixthImg} 
            />
            <DestinationData
                className="first-des-reverse"
                heading="National Museum of Ethiopia"
                text="Founded in 1944, the National Museum of Ethiopia is home to fossilized remains of early hominids, archaeological artefacts of the earliest of Ethiopia, regalia and memorabilia from ancient rulers, like Emperor Haile Selassie and artwork ranging from traditional to contemporary. "
                img1 = {seventhImg} 
                img2 = {eigthImg} 
            />
            <DestinationData
                className="first-des"
                heading="Unity Park"
                text=" various historical, natural and cultural sites.The Grand Palace, where Unity Park is located, was established in 1887, the palace served as the living and working space of seven Ethiopian leaders. The palace covers an area of 40 hectares and contains myriads of historical buildings and plants that date back to the time of Emperor Menelik II."
                img1 = {ninthmg} 
                img2 = {tenthImg} 
            />
        </div>
    );
}
export default Destination;