import { useContext } from 'react';
import CartContext from '../CartContext/CartContext.jsx';


export const useCart = () => {
    return useContext(CartContext);
};
