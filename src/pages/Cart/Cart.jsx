import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/Cart/CartContext';

export default function Cart() {
  const { cart, deleteProduct, emptyCart, updateProductQuantity } = useContext(cartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  const getTotal = () => {
    return cart.totalAmount;
  };

  if (cart.products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Tu Carrito</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.products.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateProductQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateProductQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
              </div>
              <button
                onClick={() => deleteProduct(item.id)}
                className="text-red-500 hover:text-red-700 p-2"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <button
              onClick={emptyCart}
              className="text-red-500 hover:text-red-700"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Resumen de compra</h3>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                <span>Total</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-green-600 text-white py-3 rounded-lg mt-6 hover:bg-green-700 transition-colors text-center"
              >
                Proceder al pago
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}