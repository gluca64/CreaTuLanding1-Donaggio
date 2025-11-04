import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cartContext } from './CartContext';
import toast from 'react-hot-toast';

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function CartContextProvider({ children }) {
  // estado inicial del carrito
  const [cart, setCart] = useState({
    products: [], // productos en el carro
    totalItems: 0, // cantidad total
    totalAmount: 0 // precio total
  });

  // recupero el carrito guardado si existe
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // guardo el carrito cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)); // convierto a JSON pa guardarlo
  }, [cart]);

  // veo si un producto ya está en el carro
  const isInCart = (productId) => {
    return cart.products.some((item) => item.id === productId);
  };

  const getProductsInCart = () => {
    return cart.products;
  };

  // agrego un producto nuevo o sumo cantidad si ya existe
  const addProduct = async (product) => {
    try {
      // si no está en el carro lo agrego con cantidad 1
      if (!isInCart(product.id)) {
        const newProducts = [...cart.products, { ...product, quantity: 1 }];
        setCart({
          products: newProducts,
          totalItems: cart.totalItems + 1,
          totalAmount: cart.totalAmount + product.price
        });
        toast.success('¡Producto agregado al carrito!');
      } else {
        // si ya está sumo 1 a la cantidad
        updateProductQuantity(product.id, getProductQuantity(product.id) + 1);
      }
      return true;
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      toast.error('Error al agregar el producto');
      return false;
    }
  };

  // borro un producto del carrito
  const deleteProduct = async (productId) => {
    try {
      // busco el producto
      const product = cart.products.find(p => p.id === productId);
      if (product) {
        // filtro pa dejarlo afuera
        const newProducts = cart.products.filter(p => p.id !== productId);
        // actualizo el carrito sin el producto
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

  // cambio la cantidad de un producto en el carro
  const updateProductQuantity = async (productId, newQuantity) => {
    // no dejo poner menos de 1
    if (newQuantity < 1) return false;
    
    try {
      // actualizo la cantidad del producto
      const updatedProducts = cart.products.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });

      // recalculo totales
      const newTotalItems = updatedProducts.reduce((total, item) => total + item.quantity, 0);
      const newTotalAmount = updatedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);

      // actualizo el carrito
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

  // vacío todo el carrito
  const emptyCart = async () => {
    try {
      // reseteo todo a cero
      setCart({
        products: [], // array vacío 
        totalItems: 0, // cero items
        totalAmount: 0 // cero pesos
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