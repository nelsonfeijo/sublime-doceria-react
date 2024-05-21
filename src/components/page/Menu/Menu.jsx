
import MenuItem from '../Menu/MenuItem/MenuItem';
import styles from './Menu.module.css';
import doc1 from '../../../assets/barca_de_docinhos.jpg'
import bolo1 from '../../../assets/bolo_de_pote.jpg'
import bolo2 from '../../../assets/bolo_de_leite_ninho.jpg'
import bolo3 from '../../../assets/brownie.jpg'
import doc3 from '../../../assets/docinhodecoco.jpg'
import doc4 from '../../../assets/caixinhadedocinhos.jpg'

const Menu = () => {
    return (
        <div className={styles.menu_container}>
            <section className={styles.menu_section} id="starters">
                <h1>Bolos</h1>
                <MenuItem 
                    title="Com cobertura de chocolate"
                    description="Alface romana, croutons e molho Caesar caseiro."
                    price="R$ 15,00"
                    image={bolo1}
                />
                <MenuItem 
                    title="Com cobertura de chocolate"
                    description="Alface romana, croutons e molho Caesar caseiro."
                    price="R$ 15,00"
                    image={bolo2}
                />
                <MenuItem 
                    title="Com cobertura de chocolate"
                    description="Alface romana, croutons e molho Caesar caseiro."
                    price="R$ 15,00"
                    image={bolo3}
                />
            </section>

            <section className={styles.menu_section} id="main-courses">
                <h1>Bolos de Pote</h1>
                <MenuItem 
                    title="Com cobertura de chocolate"
                    description="Alface romana, croutons e molho Caesar caseiro."
                    price="R$ 15,00"
                    image={doc1}
                />
            
                <MenuItem 
                    title="Com cobertura de chocolate"
                    description="Alface romana, croutons e molho Caesar caseiro."
                    price="R$ 15,00"
                    image={doc3}
                />
                <MenuItem 
                    title="Com cobertura de chocolate"
                    description="Alface romana, croutons e molho Caesar caseiro."
                    price="R$ 15,00"
                    image={doc4}
                />
            </section>
        </div>
    );
}

export default Menu;
