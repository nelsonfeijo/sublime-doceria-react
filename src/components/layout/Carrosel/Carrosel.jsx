import { useState, useEffect, useCallback } from 'react';
import styles from './Carrosel.module.css';
import img1 from '../../../assets/barca_de_docinhos.jpg';
import img2 from '../../../assets/bolo_de_pote.jpg';
import img3 from '../../../assets/bolo_de_leite_ninho.jpg';
import img4 from '../../../assets/brownie.jpg';

const Carrosel = () => {
  const totalSlides = 4;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={styles.slider}>
      <input type="radio" name="radio-btn" id="radio1" className={styles.radio1} checked={currentSlide === 0} readOnly />
      <input type="radio" name="radio-btn" id="radio2" className={styles.radio2} checked={currentSlide === 1} readOnly />
      <input type="radio" name="radio-btn" id="radio3" className={styles.radio3} checked={currentSlide === 2} readOnly />
      <input type="radio" name="radio-btn" id="radio4" className={styles.radio4} checked={currentSlide === 3} readOnly />

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
        <label htmlFor="radio1" className={styles.manual_btn} onClick={() => setCurrentSlide(0)}></label>
        <label htmlFor="radio2" className={styles.manual_btn} onClick={() => setCurrentSlide(1)}></label>
        <label htmlFor="radio3" className={styles.manual_btn} onClick={() => setCurrentSlide(2)}></label>
        <label htmlFor="radio4" className={styles.manual_btn} onClick={() => setCurrentSlide(3)}></label>
      </div>
    </div>
  );
};

export default Carrosel;
