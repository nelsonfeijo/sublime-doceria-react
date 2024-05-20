import styles from "./Menu.module.css";

function Menu() {
    return ( 
        <div className={styles.menu_container}>
        <section className={styles.menu_section} id="starters">
            <h2>Bolos</h2>
            <div className={styles.menu_item}>
                <div>
                    <img></img>
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
                    <img></img>
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
            <h2>Bolos de Pote</h2>
            <div className={styles.menu_item}>
            <div>
                    <img></img>
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
                    <img></img>
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