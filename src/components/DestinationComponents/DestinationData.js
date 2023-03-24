import { Component } from "react";
import "./DestinationStyles.css";
import firstImg from "../../assets/6.jpg"; 
import secondImg from "../../assets/7.jpg"; 

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1} /> 
                    <img alt="img" src={this.props.img2} /> 
                </div>
            </div>
        );
    }
}
export default DestinationData;