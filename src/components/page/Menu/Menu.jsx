
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
                    title="Bolo de pote"
                    description="Bolo de 4 leites, com chocolate branco realado e muito cremoso"
                    price="R$ 15,00"
                    image={bolo1}
                />
                <MenuItem 
                    title="Bolo com cobertura de leite ninho"
                    description="Bolo simples com cobertura de leite ninho"
                    price="R$ 35,00"
                    image={bolo2}
                />
                <MenuItem 
                    title="Brownie com KitKat"
                    description="Brownie com cobertura de brigadeiro e KitKat"
                    price="R$ 10,00"
                    image={bolo3}
                />
            </section>

            <section className={styles.menu_section} id="main-courses">
                <h1>Docinhos</h1>
                <MenuItem 
                    title="Barca de docinhos"
                    description="Barca com 20 docinhos sortidos."
                    price="R$ 30,00"
                    image={doc1}
                />
            
                <MenuItem 
                    title="Docinho de coco"
                    description="Docinho de coco com leite ninho"
                    price="R$ 2,00"
                    image={doc3}
                />
                <MenuItem 
                    title="Brigadeiro de docinho de morango"
                    description="Caixinha com 2 brigadeiros e 2 brigadeiros de morango"
                    price="R$ 10,00"
                    image={doc4}
                />
            </section>
        </div>
    );
}

export default Menu;
