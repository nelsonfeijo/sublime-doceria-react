import styles from "./Menu.module.css";
import doc1 from '../../../assets/barca_de_docinhos.jpg'
import bolo1 from '../../../assets/bolo_de_pote.jpg'
import bolo2 from '../../../assets/bolo_de_leite_ninho.jpg'
import bolo3 from '../../../assets/brownie.jpg'
import bolo4 from '../../../assets/bolodepote.jpg'
import doc2 from '../../../assets/minibrownie.jpg'
import doc3 from '../../../assets/docinhodecoco.jpg'
import doc4 from '../../../assets/caixinhadedocinhos.jpg'
import { BiCartAdd } from "react-icons/bi";

function Menu() {
    return ( 
        <div className={styles.menu_container}>
        <section className={styles.menu_section} id="starters">
            <h1>Bolos</h1>
            <div className={styles.menu_item}>
                <div>
                <img src={bolo1}></img>
                </div>
                <div>
                    
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><BiCartAdd /></button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.menu_item}>
            <div>
                <img src={bolo2}></img>
                </div>
                <div>
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
            <h2>Bolos de Pote</h2>
            <div className={styles.menu_item}>
            <div>
                <img src={bolo3}></img>
                </div>
            <div>
                    
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu_item}>
            <div>
                <img src={bolo4}></img>
                </div>
                <div>
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.menu_section} id="main-courses">
        <h1>Bolos de Pote</h1>
            <div className={styles.menu_item}>
            <div>
                <img src={doc1}></img>
                </div>
                 <div>   
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu_item}>
            <div>
                <img src={doc2}></img>
                </div>
            <div>
                    
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
            <h2>Bolos de Pote</h2>
            <div className={styles.menu_item}>
            <div>
                <img src={doc3}></img>
                </div>
            <div>
                
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu_item}>
            <div>
                <img src={doc4}></img>
                </div>
            <div>
                    <div>
                    <h3>Com cobertura de chocolate</h3>
                    <p>Alface romana, croutons e molho Caesar caseiro.</p>
                    <div className={styles.price}>
                        <p>R$ 15,00</p>
                    <button><i></i></button>
                    </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
    );
}

export default Menu;