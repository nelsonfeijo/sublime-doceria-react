import styles from '../About/About.module.css';
import ButtonMenu from '../../Buttons/ButtonMenu/ButtonMenu';
import img1 from '../../../assets/img1.jpg';

function About() {
    return (  
<section className={styles.home}>
    <div className={styles.cta}>
        <img src={img1} alt="img 1" />
    </div>
    <div>
        <h1 className={styles.title}>
            A <span>Sublime</span> Doceria
        </h1>
        <p className={styles.description}>
        Bem-vindos à A Sublime Doceria! Somos uma loja dedicada a transformar ingredientes simples em doces <span>inesquecíveis</span> . Com uma paixão pela confeitaria, oferecemos bolos, brigadeiros e, em breve, muito mais, todos preparados artesanalmente com os <span>melhores ingredientes</span>. Nosso compromisso é adoçar seus <span>momentos especiais</span>  com produtos de alta qualidade e designs encantadores. Venha nos conhecer e descubra como podemos tornar suas celebrações ainda mais <span>sublimes</span>!
        </p>
        <div className={styles.btn_container}>
            <ButtonMenu className={styles.btn_menu} />
        </div>
    </div>
</section>
    );
}

export default About;
