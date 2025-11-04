import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { wishlistContext } from './WishlistContext';

WishlistContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function WishlistContextProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // pa q no se pierdan los favoritos cuando refrescai la página
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
    setLoading(false);
  }, []);

  // guarda los favoritos cuando los modificai
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const getWishlist = () => {
    return wishlist;
  };

  const addToWishlist = async (product) => {
    try {
      if (!isInWishlist(product.id)) {
        setWishlist([...wishlist, product]);
        toast.success('¡Producto agregado a favoritos!');
      }
      return true;
    } catch (err) {
      console.error('Error al agregar a favoritos:', err);
      toast.error('Error al agregar a favoritos');
      return false;
    }
  };

  const deleteWishlistItem = async (productId) => {
    try {
      setWishlist(wishlist.filter(item => item.id !== productId));
      toast.success('Producto eliminado de favoritos');
      return true;
    } catch (err) {
      console.error('Error al eliminar de favoritos:', err);
      toast.error('Error al eliminar de favoritos');
      return false;
    }
  };

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        isInWishlist,
        addToWishlist,
        deleteWishlistItem,
        getWishlist,
        loading
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}