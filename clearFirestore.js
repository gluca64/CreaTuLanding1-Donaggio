import { db } from './src/config/firebase.js';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

async function clearFirestore() {
  console.log('Eliminando todos los productos de Firestore...');
  
  try {
    const productosCollection = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCollection);
    
    console.log(`Encontrados ${productosSnapshot.docs.length} documentos`);
    
    for (const documento of productosSnapshot.docs) {
      await deleteDoc(doc(db, 'productos', documento.id));
      console.log(`✓ Documento ${documento.id} eliminado`);
    }
    
    console.log('✅ Todos los productos fueron eliminados!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

clearFirestore();
