import "./FooterStyles.css"
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png"
import {Routes,Route,Link} from "react-router-dom";
import instagram from "../assets/instagram.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
function Footer(){
    return(
        <div className="Footer">
            <h3>Join our exclusive membership to recieve the latest news
                and trends
            </h3>
            <h4>You can unsubscribe at any time.</h4>
            <div className="email" >
                <input type="email" placeholder="Your Email" required></input>
                <button>Subscribe</button>
            </div>
            <div className="links">
                <div>
                    <h4>About Us</h4>
                    <div className="section">
                        <Link to="/">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>                        
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <div className="section">
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorship</Link>
                    </div> 
                </div>
                <div>
                    <h4>Videos</h4>
                    <div className="section">
                        <Link to="/">Sublit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div> 
                </div>
                <div>
                    <h4>Social Media</h4>
                    <div className="section">
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div> 
                </div>
            </div>
            <div className="copyright">
                <div className="logo">
                    <img src={logo}></img>
                    <h1>Z-TRANSIT</h1>
                </div>
                <h4>Z-TRANSIT &copy; 2022</h4>
                <div className="social-media" >
                    
                    <a href="#" ><img src={facebook} /></a>
                    <a href="#" ><img src={instagram} /></a>
                    <a href="#" ><img src={github} /></a>
                    <a href="#" ><img src={linkedin} /></a>
                </div>
            </div>
        </div>

        
    )
}

export default Footer;