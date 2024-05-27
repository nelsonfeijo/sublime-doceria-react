import styles from './MenuItem.module.css';
import { useCart } from '../../Cart/UseCart/useCart';

const MenuItem = ({ id, title, description, price, image }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = { id, title, description, price, image };
        addToCart(item);
    };

    return (
        <div className={styles.menu_item}>
            <div className={styles.image_wrapper}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.menu_content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.price}>
                    <p>{price}</p>
                    <button className={styles.order_button} onClick={handleAddToCart}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
