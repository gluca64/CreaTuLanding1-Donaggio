
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import MainLayout from './layouts/MainLayout';
import Categories from './pages/Categories/Categories';
import Brands from './pages/Brands/Brands';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import NotFound from './pages/NotFound/NotFound';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import CartContextProvider from './context/Cart/Cart';
import WishlistContextProvider from './context/Wishlist/Wishlist';

function App() {
  return (
    <CartContextProvider>
      <WishlistContextProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/marcas" element={<Brands />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </WishlistContextProvider>
    </CartContextProvider>
  );
}

export default App;
