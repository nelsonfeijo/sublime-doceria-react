import { useContext } from 'react';
import { CartContext } from './CartContext';

// Hook para usar o contexto
export const useCart = () => {
    return useContext(CartContext);
};
