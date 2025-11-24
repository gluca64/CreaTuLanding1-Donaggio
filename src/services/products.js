import { db } from '../config/firebase';
import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';

export const getProducts = async () => {
  try {
    const productosCollection = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCollection);
    const productosList = productosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productosList;
  } catch (error) {
    console.error('Error al traer los productos:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const productoDoc = doc(db, 'productos', id);
    const productoSnapshot = await getDoc(productoDoc);
    
    if (productoSnapshot.exists()) {
      return {
        id: productoSnapshot.id,
        ...productoSnapshot.data()
      };
    }
    return null;
  } catch (error) {
    console.error('Error al traer el producto:', error);
    return null;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const productosCollection = collection(db, 'productos');
    const q = query(productosCollection, where('category', '==', categoryId));
    const productosSnapshot = await getDocs(q);
    const productosList = productosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productosList;
  } catch (error) {
    console.error('Error al filtrar productos:', error);
    return [];
  }
};
