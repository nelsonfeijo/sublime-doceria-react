import styles from './MenuItem.module.css';

const MenuItem = ({ title, description, price, image }) => {
    return (
        <div className={styles.menu_item}>
            <div className={styles.image_wrapper}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.menu_content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={`${styles.price} ${styles.price_container}`}>
                    <p>{price}</p>
                    <button className={styles.order_button}>
                        <i className="fas fa-shopping-cart"></i> Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
