import { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        // Adiciona um novo campo 'id' ao item
        const newItem = { ...item, id: Date.now() };
        setCart((prevCart) => [...prevCart, newItem]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
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
