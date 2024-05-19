import Carrosel from '../../layout/Carrosel/Carrosel';
import styles from './Home.module.css';


function Home() {
    return ( 
<section className={styles.home}>
            
        <div id={styles.cta}>
            <h1 className={styles.title}>
                O sabor que vai até <span>você</span>
            </h1>
            <p className={styles.description}>Doce como a vida deve ser! Cada pedaço traz a <span>felicidade em forma de sabor</span> , fazendo seus momentos ainda mais especiais.</p>
        </div>
        <Carrosel />
       
        
    </section>
    );
}

export default Home;