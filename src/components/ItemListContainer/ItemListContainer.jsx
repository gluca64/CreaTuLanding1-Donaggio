import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/products';

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  // cargo los productos cuando cambia la categoria
  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await getProducts();
      if (categoryId) {
        // filtro los productos x categoria si hay una seleccionada
        const filtered = allProducts.filter(product => product.category === categoryId);
        setProducts(filtered);
      } else {
        // si no hay categoria muestro todos
        setProducts(allProducts);
      }
    };
    
    loadProducts();
  }, [categoryId]);

  return (
    <>
      {!categoryId && (
        <>
          <MainSlider />
          <CategorySlider />
        </>
      )}
      {products.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">
            {categoryId ? `Productos de ${categoryId}` : 'Todos los productos'}
          </h2>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
}