import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import styles from './Footer.module.css'
import logo from "../../../assets/logo.jpg";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_items}>
            <img src={logo} alt="Sublime Doceria" className={styles.img}/>
            <span className={styles.copyright}>
                &copy 2024 Nelson Feijo
            </span>
            <div >
                <a href="">
                <IoLogoWhatsapp className={styles.social_media_buttons}/>
                </a>

                <a href="">
                <FaInstagram className={styles.social_media_buttons}/>
                </a>

                <a href="">
                <FaFacebookSquare className={styles.social_media_buttons}/>
                </a>
            </div>
            </div>
        </div>
     );
}

export default Footer;