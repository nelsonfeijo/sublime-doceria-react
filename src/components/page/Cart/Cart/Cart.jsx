import { useCart } from '../UseCart/useCart';
import styles from '../Cart/Cart.module.css';
import { useState, useEffect } from 'react';

const Cart = () => {
    const { cart, setCart, removeFromCart } = useCart(); // Garantir que setCart está disponível
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
    

    const handleRemoveFromCart = (title) => {
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
       
        // Remove a primeira ocorrência do item com o título específico no array original
        const updatedOriginalCart = cart.filter((item) => {
            if (item.title === title && !itemToRemove.removed) {
                itemToRemove.removed = true; // Marca o item como removido
                return false;
            }
            return true;
        });
        setCart(updatedOriginalCart);
        removeFromCart(title); // Chama a função removeFromCart para atualizar o backend
    };
    const handleAddToCart = (title) => {
        const updatedCart = [...cart];
        const itemToAdd = updatedCart.find(item => item.title === title);
        updatedCart.push(itemToAdd);
        setCart(updatedCart);
    };
    const handleCheckout = () => {
        // Lógica para finalizar o pedido
        console.log('Pedido finalizado');
    };
    const handleRemoveAllFromCart = (title) => {
        const updatedCart = groupedCartItems.filter(item => item.title !== title);
        setGroupedCartItems(updatedCart);

        const updatedOriginalCart = cart.filter(item => item.title !== title);
        setCart(updatedOriginalCart);
        removeFromCart(title); // Chama a função removeFromCart para atualizar o backend
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
                                    <p>Quantidade: <button className={styles.btn_quantity} onClick={() => handleRemoveFromCart(item.title)}>-</button>{item.quantity}<button className={styles.btn_quantity} onClick={() => handleAddToCart(item.title)}>+</button></p>
                                    </div>
                                    <div className={styles.cart_item_details_buttons}> <button className={styles.order_button} onClick={() => handleRemoveAllFromCart(item.title)}>Remover</button></div>
                                   
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
