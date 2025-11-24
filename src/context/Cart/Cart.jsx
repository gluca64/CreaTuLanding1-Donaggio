import { useState, useEffect } from 'react';
import { cartContext } from './CartContext';
import toast from 'react-hot-toast';

export default function CartContextProvider({ children }) {
  // aca guardo todo lo del carrito
  const [cart, setCart] = useState({
    products: [],
    totalItems: 0,
    totalAmount: 0
  });

  // cuando carga la pagina traigo el carrito guardado
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // guardo en localStorage cada vez q cambia algo
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const isInCart = (productId) => {
    return cart.products.some((item) => item.id === productId);
  };

  const getProductsInCart = () => {
    return cart.products;
  };

  const addProduct = async (product) => {
    try {
      if (!isInCart(product.id)) {
        const newProducts = [...cart.products, { ...product, quantity: 1 }];
        setCart({
          products: newProducts,
          totalItems: cart.totalItems + 1,
          totalAmount: cart.totalAmount + product.price
        });
        toast.success('¡Producto agregado al carrito!');
      } else {
        updateProductQuantity(product.id, getProductQuantity(product.id) + 1);
      }
      return true;
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      toast.error('Error al agregar el producto');
      return false;
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const product = cart.products.find(p => p.id === productId);
      if (product) {
        const newProducts = cart.products.filter(p => p.id !== productId);
        setCart({
          products: newProducts,
          totalItems: cart.totalItems - product.quantity,
          totalAmount: cart.totalAmount - (product.price * product.quantity)
        });
        toast.success('Producto eliminado del carrito');
      }
      return true;
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      toast.error('Error al eliminar el producto');
      return false;
    }
  };

  const updateProductQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return false;
    
    try {
      const updatedProducts = cart.products.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });

      const newTotalItems = updatedProducts.reduce((total, item) => total + item.quantity, 0);
      const newTotalAmount = updatedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);

      setCart({
        products: updatedProducts,
        totalItems: newTotalItems,
        totalAmount: newTotalAmount
      });
      toast.success('Cantidad actualizada');
      return true;
    } catch (err) {
      console.error('Error al actualizar la cantidad:', err);
      toast.error('Error al actualizar la cantidad');
      return false;
    }
  };

  const getProductQuantity = (productId) => {
    const product = cart.products.find(p => p.id === productId);
    return product ? product.quantity : 0;
  };

  const emptyCart = async () => {
    try {
      setCart({
        products: [],
        totalItems: 0,
        totalAmount: 0
      });
      toast.success('Carrito vaciado');
      return true;
    } catch (err) {
      console.error('Error al vaciar el carrito:', err);
      toast.error('Error al vaciar el carrito');
      return false;
    }
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addProduct,
        deleteProduct,
        updateProductQuantity,
        emptyCart,
        isInCart,
        getProductsInCart,
        getProductQuantity
      }}
    >
      {children}
    </cartContext.Provider>
  );
}