import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../assets/ent.jpg";
import Trip2 from "../../assets/au.jpg";
import Trip3 from "../../assets/hg1.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Visits</h1>
            <p>You can discover the most unique artifacts.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading = "Ethiopian National Theatre"
                    text = "The hall had begun to be built during the Italian occupation as the Cinema Marconi with some 350 seats. The building was later completed in 1955 for the celebrations of the Silver Jubilee, and expanded to seat 1260 people. The theatre group was founded by the government in the late 1940s, with the main objective of playing Ethiopian songs by soloists accompanied by a modern orchestra."
                />
                <TripData
                    image={Trip2}
                    heading = "Africa Union"
                    text = "African Union is a continental union consisting of 55 member states located on the continent of Africa. The AU was announced in the Sirte Declaration in Sirte, Libya, on 9 September 1999, calling for the establishment of the African Union."
                />
                <TripData
                    image={Trip3}
                    heading = "Hager Fikir Theater"
                    text = "The theatre was incorporated in 1935 by collaborative association Ye-hager Fikir Mahber. The formation originally aimed for preemptive union of Ethiopian nation and its culture against upcoming Italian full invasion of the country a year later. "
                />
            </div>
        </div>
    );
}
export default Trip;