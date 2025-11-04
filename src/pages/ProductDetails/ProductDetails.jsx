import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/Cart/CartContext';
import { wishlistContext } from '../../context/Wishlist/WishlistContext';
import Spinner from '../../components/Spinner/Spinner';
import ItemCount from '../../components/ItemCount/ItemCount';
import { getProductById } from '../../services/products';

export default function ProductDetails() {
  // agarro el id del producto de la url
  const { id } = useParams();
  // cositas del carrito y favoritos
  const { addProduct, isInCart } = useContext(cartContext);
  const { isInWishlist, toggleWishlist } = useContext(wishlistContext);
  // pa guardar los datos del producto
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading || !product) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
          <button
            onClick={() => toggleWishlist(product.id)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          >
            {isInWishlist(product.id) ? (
              <i className="fas fa-heart fa-lg text-red-500"></i>
            ) : (
              <i className="far fa-heart fa-lg text-gray-600"></i>
            )}
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="bg-gray-100 px-4 py-2 rounded-md inline-block mb-6">
            <span className="text-gray-600">Categoría: </span>
            <span className="font-medium">{product.category}</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="text-2xl font-bold text-green-600">
              {formatPrice(product.price)}
            </span>
          </div>
          <div className="mb-6">
            <span className="text-gray-600">Stock disponible: </span>
            <span className="font-medium">{product.stock} unidades</span>
          </div>
          {isInCart(product.id) ? (
            <button
              disabled
              className="w-full md:w-auto px-8 py-3 rounded-lg text-white font-medium bg-gray-400 cursor-not-allowed"
            >
              Producto en el carrito
            </button>
          ) : (
            <ItemCount 
              stock={product.stock} 
              initial={1} 
              onAdd={(quantity) => addProduct({ ...product, quantity })}
            />
          )}
        </div>
      </div>
    </div>
  );
}