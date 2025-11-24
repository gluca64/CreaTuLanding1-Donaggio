import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y nombre */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold">MercadoCL</span>
            </Link>
            <Link to="/cart" className="flex items-center">
              <CartWidget />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full ps-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
                placeholder="Buscar productos..."
              />
            </div>
          </div>

          {/* Menu items */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm ${location.pathname === '/' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} flex items-center gap-2`}
            >
              <i className="fas fa-home"></i>
              <span>Inicio</span>
            </Link>
            <Link 
              to="/wishlist" 
              className={`text-sm ${location.pathname === '/wishlist' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} flex items-center gap-2`}
            >
              <i className="fas fa-heart"></i>
              <span>Favoritos</span>
            </Link>
            <Link 
              to="/marcas" 
              className={`text-sm ${location.pathname === '/marcas' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} flex items-center gap-2`}
            >
              <i className="fa-solid fa-tags"></i>
              <span>Marcas</span>
            </Link>
            <Link 
              to="/categorias" 
              className={`text-sm ${location.pathname === '/categorias' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'} flex items-center gap-2`}
            >
              <i className="fa-solid fa-list"></i>
              <span>Categorías</span>
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full ps-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
                    placeholder="Buscar productos..."
                  />
                </div>
              </div>
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/' ? 'text-green-600 bg-gray-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-home"></i>
                  <span>Inicio</span>
                </div>
              </Link>
              <Link
                to="/wishlist"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/wishlist' ? 'text-green-600 bg-gray-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-heart"></i>
                  <span>Favoritos</span>
                </div>
              </Link>
              <Link
                to="/cart"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/cart' ? 'text-green-600 bg-gray-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CartWidget />
                  <span>Carrito</span>
                </div>
              </Link>
              <Link
                to="/marcas"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/marcas' ? 'text-green-600 bg-gray-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-tags"></i>
                  <span>Marcas</span>
                </div>
              </Link>
              <Link
                to="/categorias"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/categorias' ? 'text-green-600 bg-gray-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-list"></i>
                  <span>Categorías</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}