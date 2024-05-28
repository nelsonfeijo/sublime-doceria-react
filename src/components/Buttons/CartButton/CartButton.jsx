import './CartButton.css'
import { FaShoppingCart } from "react-icons/fa";

function CartButton() {
  return ( 
    <button type='button' className='cart__button'>
      <FaShoppingCart />
    </button>
   );
}

export default CartButton