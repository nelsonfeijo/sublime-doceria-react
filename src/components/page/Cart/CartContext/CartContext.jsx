import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Criação do contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const fetchCart = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cart');
            setCart(response.data);
        } catch (error) {
            console.error('Erro ao buscar o carrinho:', error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (item) => {
        try {
            await axios.post('http://localhost:5000/cart', item);
            fetchCart(); // Atualiza o carrinho após adicionar
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await axios.delete(`http://localhost:5000/cart/${itemId}`);
            fetchCart(); // Atualiza o carrinho após remover
        } catch (error) {
            console.error('Erro ao remover do carrinho:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartContext;
