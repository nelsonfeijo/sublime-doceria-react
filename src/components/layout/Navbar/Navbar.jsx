import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.jpg";
import Container from "../Container/Container";
import CartButton from "../../Buttons/CartButton/CartButton.jsx";

function Navbar() {
    return ( 
        <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Cardápio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact"><CartButton /></Link>
          </li>
        </ul>
      </Container>
    </div>
     );
}

export default Navbar;