// script pa limpiar todos los productos duplicados de firestore
import { db } from '../config/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export const clearAllProducts = async () => {
  try {
    console.log('Eliminando todos los productos...');
    const productosCollection = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCollection);
    
    for (const documento of productosSnapshot.docs) {
      await deleteDoc(doc(db, 'productos', documento.id));
      console.log(`Producto ${documento.id} eliminado`);
    }
    
    console.log('Todos los productos fueron eliminados!');
  } catch (error) {
    console.error('Error al eliminar productos:', error);
  }
};
