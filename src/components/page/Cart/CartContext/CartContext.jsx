import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cart/123');
        setCart(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar o carrinho:', error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    await saveCart(newCart);
  };

  const removeFromCart = async (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    await saveCart(newCart);
  };

  const saveCart = async (newCart) => {
    try {
      await axios.post('http://localhost:5000/cart/123', { items: newCart });
    } catch (error) {
      console.error('Erro ao salvar o carrinho:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
