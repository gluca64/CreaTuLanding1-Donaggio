import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const createOrder = async (order) => {
  try {
    const ordenesCollection = collection(db, 'ordenes');
    const docRef = await addDoc(ordenesCollection, order);
    console.log('Orden creada con ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error al crear la orden:', error);
    throw error;
  }
};
