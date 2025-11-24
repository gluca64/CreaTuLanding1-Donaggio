import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { getProducts } from '../../services/products';

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await getProducts();
        console.log('Productos cargados:', allProducts);
        if (categoryId) {
          const filtered = allProducts.filter(product => product.category === categoryId);
          setProducts(filtered);
        } else {
          setProducts(allProducts);
        }
        setCurrentPage(1);
      } catch (error) {
        console.error('Error cargando productos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, [categoryId]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {!categoryId && (
        <>
          <MainSlider />
          <CategorySlider />
        </>
      )}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Spinner />
        </div>
      ) : products.length > 0 ? (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">
            {categoryId ? `Productos de ${categoryId}` : 'Todos los productos'}
          </h2>
          <ItemList products={currentProducts} />
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-xl text-gray-600">No se encontraron productos</p>
        </div>
      )}
    </>
  );
}