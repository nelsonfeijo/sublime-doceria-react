import './CartButton.css';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../page/Cart/UseCart/useCart';

function CartButton() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleClick = () => {
    navigate('/cart');
    window.location.reload();
  };

  return ( 
    <button type='button' className='cart__button' onClick={handleClick}>
      <FaShoppingCart />
      {cart.length > 0 && (
        <span className="cart__count">{cart.length}</span>
      )}
    </button>
  );
}

export default CartButton;
