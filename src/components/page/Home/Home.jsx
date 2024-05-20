import ButtonMenu from '../../Buttons/ButtonMenu/ButtonMenu';
import Carrosel from '../../layout/Carrosel/Carrosel';
import styles from './Home.module.css';


function Home() {
    return ( 
<section className={styles.home}>
    <div id={styles.cta}>
        <h1 className={styles.title}>
            O sabor que vai até <span>você</span>!
        </h1>
        <p className={styles.description}>
            Doce como a vida deve ser! Cada pedaço traz a <span>felicidade em forma de sabor</span>, fazendo seus momentos ainda mais especiais.
        </p>
        <div className={styles.btn_container}>
            <ButtonMenu className={styles.btn_menu} />
        </div>
    </div>
    <Carrosel className={styles.carrosel} />
</section>


    );
}

export default Home;