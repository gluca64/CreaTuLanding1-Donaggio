import { useContext } from 'react';
import { cartContext } from '../../context/Cart/CartContext';

export default function CartWidget() {
  const { cart } = useContext(cartContext);
  
  return (
    <div className="relative flex items-center justify-center">
      <i className="fas fa-shopping-cart text-green-600 text-lg"></i>
      <span className="absolute -top-2 -right-3 bg-white text-green-600 text-xs rounded-full w-5 h-5 flex items-center justify-center border border-green-600 font-semibold">
        {cart.totalItems}
      </span>
    </div>
  );
}