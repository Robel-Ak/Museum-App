import "./FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Gubeniet</h1>
                    <p>Let us help you have an amazing time in our wonderful city.</p>
                </div>
                <div>
                    <a href="/" ><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/" ><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/" ><i className="fa-brands fa-twitter-square"></i></a>
                    <a href="/" ><i className="fa-brands fa-youtube-square"></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Sites</h4>
                    <a href="/">Theatre</a>
                    <a href="/">Park</a>
                    <a href="/">Cinema</a>
                    <a href="/">Museums</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Gathering</a>
                    <a href="/">Celebrations</a>
                    <a href="/">Events</a>
                    <a href="/">History</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;