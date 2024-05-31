import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Criação do contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cart');
                setCart(response.data);
            } catch (error) {
                console.error('Erro ao buscar o carrinho:', error);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (item) => {
        try {
            await axios.post('http://localhost:5000/cart', item);
            setCart((prevCart) => [...prevCart, item]);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    const removeFromCart = async (title) => {
        try {
            const itemToRemove = cart.find(item => item.title === title);
            if (itemToRemove) {
                await axios.delete(`http://localhost:5000/cart/${itemToRemove.id}`);
                setCart((prevCart) => prevCart.filter(item => item.id !== itemToRemove.id));
            }
        } catch (error) {
            console.error('Erro ao remover do carrinho:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartContext;
