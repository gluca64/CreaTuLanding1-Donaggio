import { useState } from 'react';

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={decrement}
          className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
          disabled={count <= 1}
        >
          <i className="fas fa-minus"></i>
        </button>
        <span className="text-xl font-semibold w-12 text-center">{count}</span>
        <button 
          onClick={increment}
          className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
          disabled={count >= stock}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors w-full"
      >
        Agregar al carrito
      </button>
    </div>
  );
}