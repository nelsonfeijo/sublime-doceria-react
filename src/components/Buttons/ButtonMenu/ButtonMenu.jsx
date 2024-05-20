import styles from './ButtonMenu.module.css'
import { Link } from "react-router-dom";
import { FaFaceSmileBeam } from "react-icons/fa6";


function ButtonMenu() {
    return ( 
        <div>
            <button className={styles.btn_default}>
            <Link to="/menu" className={styles.btn_txt}>Faça já o seu pedido <FaFaceSmileBeam /></Link>
            </button>
        </div>
     );
}

export default ButtonMenu;