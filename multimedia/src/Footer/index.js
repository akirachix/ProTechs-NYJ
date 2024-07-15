import './index.css';
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from '../images/logo.png'

const Footer = () => {
    return(
        <div id="footer">
    <div className='social-pallatforms'>
        <h3 className='social'>Social Plattforms</h3>
        <div className='links'>
        <CiYoutube/>
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
        <BsTwitterX />
        <img id="logo-image" src={logo}/>
        </div>
    </div>
    <div className='contact-us'>
          <h3 className='contact'>Contact Us</h3>
          <p className='contacts'> PhoneNumber: +254793058550</p>
          <p className='contacts'>Email: protechs@gmail.com</p>
     </div>
    <div className='quick-links'>
        <h3 className='footer-detail'>Quick Links</h3>
        <p className='footer-details'>Home</p>
        <p className='footer-details'>Podcasts</p>
        <p className='footer-details'>Videos</p>
        <p className='footer-details'>Blogs</p>
    </div>
    </div>
    )
}
export default Footer;
