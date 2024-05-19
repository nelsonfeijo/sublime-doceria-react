import { useState, useEffect, useCallback } from 'react';
import styles from './Carrosel.module.css';
import img1 from '../../../assets/barca_de_docinhos.jpg'
import img2 from '../../../assets/bolo_de_pote.jpg'
import img3 from '../../../assets/bolo_de_leite_ninho.jpg'
import img4 from '../../../assets/brownie.jpg'

const Carrosel = () => {
    const totalSlides = 4; // Total de slides no carrossel

    const [currentSlide, setCurrentSlide] = useState(0);

        const nextSlide = useCallback(() => {
            setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
        }, [currentSlide, totalSlides]);

        useEffect(() => {
            const interval = setInterval(nextSlide, 10000);

            return () => clearInterval(interval);
        }, [nextSlide]);

    return (
        <div className={styles.slider}>
            <input type="radio" name="radio-btn" id="radio1" className={styles.radio1}/>
            <input type="radio" name="radio-btn" id="radio2" className={styles.radio2}/>
            <input type="radio" name="radio-btn" id="radio3" className={styles.radio3}/>
            <input type="radio" name="radio-btn" id="radio4" className={styles.radio4}/>

            <div className={styles.slides}>
                <div className={`${styles.slide} ${styles.first}`}>
                    <img src={img1} alt="img 1" />
                </div>
                <div className={styles.slide}>
                    <img src={img2} alt="img 2" />
                </div>
                <div className={styles.slide}>
                    <img src={img3} alt="img 3" />
                </div>
                <div className={styles.slide}>
                    <img src={img4} alt="img 4" />
                </div>
            </div>

            <div className={styles.manual_navigation}>
                <label htmlFor="radio1" className={styles.manual_btn}></label>
                <label htmlFor="radio2" className={styles.manual_btn}></label>
                <label htmlFor="radio3" className={styles.manual_btn}></label>
                <label htmlFor="radio4" className={styles.manual_btn}></label>
            </div>
        </div>
    );
};

export default Carrosel;
