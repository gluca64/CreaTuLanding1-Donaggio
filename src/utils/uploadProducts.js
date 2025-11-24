// script pa subir los productos a firestore
// solo se usa una vez pa cargar los datos
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { productos } from '../data/productos';

export const uploadProducts = async () => {
  try {
    console.log('Subiendo productos a Firestore...');
    const productosCollection = collection(db, 'productos');
    
    for (const producto of productos) {
      await addDoc(productosCollection, producto);
      console.log(`Producto ${producto.name} subido!`);
    }
    
    console.log('Todos los productos fueron subidos correctamente!');
  } catch (error) {
    console.error('Error al subir productos:', error);
  }
};
