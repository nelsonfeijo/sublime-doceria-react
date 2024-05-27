import { useContext } from 'react';
import CartContext from '../CartContext/CartContext.jsx';

// Hook para usar o contexto
export const useCart = () => {
    return useContext(CartContext);
};
