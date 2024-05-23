import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Criação do contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const userId = '123'; // Pode ser o ID do usuário autenticado

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/cart/${userId}`);
                setCart(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar o carrinho:', error);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (item) => {
        try {
            const response = await axios.post('http://localhost:5000/cart', { userId, item });
            setCart(response.data.items);
        } catch (error) {
            console.error('Erro ao adicionar item ao carrinho:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/cart/${userId}/${itemId}`);
            setCart(response.data.items);
        } catch (error) {
            console.error('Erro ao remover item do carrinho:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar o contexto
export const useCart = () => {
    return useContext(CartContext);
};
