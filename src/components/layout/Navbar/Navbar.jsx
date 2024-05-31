import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.jpg";
import Container from "../Container/Container";
import CartButton from "../../Buttons/CartButton/CartButton.jsx";

function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const pathname = location.pathname.slice(1);
    setActiveItem(pathname);
  }, [location]);

  return ( 
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Sublime Doceria" />
        </Link>
        <ul className={`${styles.list}`}>
          <li className={`${styles.item} ${activeItem === '' && styles.active}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.item} ${activeItem === 'menu' && styles.active}`}>
            <Link to="/menu">Cardápio</Link>
          </li>
          <li className={`${styles.item} ${activeItem === 'about' && styles.active}`}>
            <Link to="/about">Sobre</Link>
          </li>
          <li className={`${styles.item} ${activeItem === 'cart' && styles.active}`}>
            <Link to="/cart"><CartButton /></Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
