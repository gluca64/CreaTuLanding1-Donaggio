import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/Cart/CartContext';
import { wishlistContext } from '../../context/Wishlist/WishlistContext';

export default function Item({ product }) {
  const { addProduct } = useContext(cartContext);
  const { isInWishlist, addToWishlist, deleteWishlistItem } = useContext(wishlistContext);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      deleteWishlistItem(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addProduct(product);
  };
  
  return (
    <div className="w-full lg:md:w-1/4 md:w-1/3 sm:w-1/2 p-3">
      <div className="relative bg-white mx-auto hover:scale-105 transition-all duration-400 hover:shadow-green-300 shadow-md rounded-lg max-w-sm">
        <div className="text-right absolute top-3 left-3">
          <button
            onClick={handleWishlist}
            className="p-2 rounded-full bg-green-500 bg-opacity-25 hover:bg-opacity-50"
          >
            {isInWishlist(product.id) ? (
              <i className="fas fa-heart fa-fw fa-lg text-green-600"></i>
            ) : (
              <i className="far fa-heart fa-fw fa-lg text-green-600"></i>
            )}
          </button>
        </div>

        <Link to={`/item/${product.id}`}>
          <img
            className="rounded-t-lg w-full h-64 object-cover"
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.target.src = '/imgenes/default-product.png';
              e.target.onerror = null;
            }}
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/item/${product.id}`} className="hover:underline">
            <h3 className="text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-xl tracking-tight">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between mt-2.5 mb-5">
            <span className="text-green-600 text-sm">
              Stock disponible: {product.stock}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="md:text-xl text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
