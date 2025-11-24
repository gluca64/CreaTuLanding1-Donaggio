import { useState } from 'react';
import { uploadProducts } from '../utils/uploadProducts';

export default function UploadProducts() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    setStatus('Subiendo productos...');
    try {
      await uploadProducts();
      setStatus('¡Productos subidos correctamente!');
    } catch (error) {
      setStatus('Error al subir productos: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Subir Productos a Firebase</h1>
      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
      >
        {loading ? 'Subiendo...' : 'Subir Productos'}
      </button>
      {status && (
        <p className="mt-4 text-lg">{status}</p>
      )}
    </div>
  );
}
