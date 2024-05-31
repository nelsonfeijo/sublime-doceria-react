import { useCart } from '../UseCart/useCart';
import styles from '../Cart/Cart.module.css';
import { useState, useEffect } from 'react';

const Cart = () => {
    const { cart, setCart, addToCart, removeFromCart, removeItemsByTitle } = useCart();
    const [groupedCartItems, setGroupedCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const groupItems = () => {
            const groupedItems = cart.reduce((acc, item) => {
                const existingItem = acc.find(i => i.title === item.title);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    acc.push({ ...item, quantity: 1 });
                }
                return acc;
            }, []);
            setGroupedCartItems(groupedItems);
        };

        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => {
                const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
                return acc + price;
            }, 0);
            setTotal(totalAmount);
        };

        groupItems();
        calculateTotal();
    }, [cart]);

    const handleRemoveOneFromCart = (title) => {
        const itemToRemove = groupedCartItems.find(item => item.title === title);
        if (itemToRemove.quantity > 1) {
            const updatedCart = groupedCartItems.map(item =>
                item.title === title ? { ...item, quantity: item.quantity - 1 } : item
            );
            setGroupedCartItems(updatedCart);
        } else {
            const updatedCart = groupedCartItems.filter(item => item.title !== title);
            setGroupedCartItems(updatedCart);
        }

        
        const updatedOriginalCart = [...cart];
        const index = updatedOriginalCart.findIndex(item => item.title === title);
        if (index !== -1) {
            updatedOriginalCart.splice(index, 1);
        }
        setCart(updatedOriginalCart);
        removeFromCart(title); 
    };



    const handleRemoveAllFromCart = async (title) => {
    await removeItemsByTitle(title);
    
    const updatedGroupedCartItems = groupedCartItems.filter(item => item.title !== title);
    setGroupedCartItems(updatedGroupedCartItems);
};


    const generateUniqueId = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 4; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    
    
    const handleAddToCart = (title) => {
        const itemToAdd = cart.find(item => item.title === title);
        if (itemToAdd) {
            const newItem = { ...itemToAdd, id: generateUniqueId() }; 
            addToCart(newItem, setCart);
            const updatedCart = groupedCartItems.map(item =>
                item.title === title ? { ...item, quantity: item.quantity + 1 } : item
            );
            setGroupedCartItems(updatedCart);
        }  
    };

    const handleCheckout = () => {

        const cartItems = groupedCartItems.map((item) => {
            return `(${item.quantity}) => ${item.title}`;
        }).join(" | ");

        const addressInput = "O meu endereço é: "; 
        
        const message = encodeURIComponent(`${cartItems} || Valor total: ${total.toFixed(2)} || ${addressInput}`);
        const phone = "48999341918";
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

        setCart([]); 
        setGroupedCartItems([]);
        setTotal(0);

        console.log('Pedido finalizado');
    };

    return (
        <div className={styles.cart}>
            <h2>Seu Carrinho</h2>
            {groupedCartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    <div className={styles.cart_items}>
                        {groupedCartItems.map((item) => (
                            <div key={item.title} className={styles.cart_item}>
                                <img src={item.image} alt={item.title} />
                                <div className={styles.cart_item_details}>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <p>{item.price}</p>
                                        <p>
                                            Quantidade: 
                                            <button className={styles.btn_quantity} onClick={() => handleRemoveOneFromCart(item.title)}>-</button>
                                            {item.quantity}
                                            <button className={styles.btn_quantity} onClick={() => handleAddToCart(item.title)}>+</button>
                                        </p>
                                    </div>
                                    <div className={styles.cart_item_details_buttons}>
                                        <button className={styles.order_button} onClick={() => handleRemoveAllFromCart(item.title)}>Remover</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.cart_summary}>
                        <h3>Total: R$ {total.toFixed(2)}</h3>
                        <button onClick={handleCheckout} className={styles.checkout_button}>Finalizar Pedido</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
