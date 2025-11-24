import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/products';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl text-gray-600">Producto no encontrado</p>
      </div>
    );
  }

  return <ItemDetail product={product} />;
}
