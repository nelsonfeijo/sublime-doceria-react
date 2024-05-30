import { useCart } from '../UseCart/useCart';
import styles from '../Cart/Cart.module.css';
import { useEffect } from 'react';

const Cart = () => {
    const { cart, removeFromCart, fetchCart } = useCart();

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div className={styles.cart}>
            <h2>Seu Carrinho</h2>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className={styles.cart_item}>
                        <img src={item.image} alt={item.title} />
                        <div className={styles.cart_item_details}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
