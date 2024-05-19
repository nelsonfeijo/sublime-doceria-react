import styles from './ButtonMenu.module.css'


function ButtonMenu() {
    return ( 
        <div>
            <button className={styles.btn_default}>
                Peça aqui
            </button>
        </div>
     );
}

export default ButtonMenu;