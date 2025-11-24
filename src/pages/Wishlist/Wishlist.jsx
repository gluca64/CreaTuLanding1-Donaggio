import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { wishlistContext } from '../../context/Wishlist/WishlistContext';
import { cartContext } from '../../context/Cart/CartContext';

export default function Wishlist() {
  const { wishlist, deleteWishlistItem } = useContext(wishlistContext);
  const { addProduct } = useContext(cartContext);

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tu lista de favoritos está vacía</h2>
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Tus Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => deleteWishlistItem(product.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <i className="fas fa-heart text-red-500"></i>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  {formatPrice(product.price)}
                </span>
                <button
                  onClick={() => addProduct(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}