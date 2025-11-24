import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories] = useState([
    { 
      img: '/imgenes/cotegoria musica.jpeg', 
      nombre: 'Música',
      slug: 'musica',
      description: 'Encuentra los mejores instrumentos y equipos musicales'
    },
    { 
      img: '/imgenes/categoria hombre.jpeg', 
      nombre: 'Moda Hombre',
      slug: 'moda-hombre',
      description: 'Las últimas tendencias en moda masculina'
    },
    { 
      img: '/imgenes/categoria mujer.jpeg', 
      nombre: 'Moda Mujer',
      slug: 'moda-mujer',
      description: 'Descubre las últimas tendencias en moda femenina'
    },
    { 
      img: '/imgenes/categoria supermercado.jpg', 
      nombre: 'Supermercado',
      slug: 'supermercado',
      description: 'Todo lo que necesitas para tu hogar'
    },
    { 
      img: '/imgenes/bebes y jugetes.png', 
      nombre: 'Bebés y Juguetes',
      slug: 'bebes-juguetes',
      description: 'Los mejores productos para los más pequeños'
    },
    { 
      img: '/imgenes/libros para ninos.jpg', 
      nombre: 'Libros',
      slug: 'libros',
      description: 'Una amplia selección de libros para todas las edades'
    },
    { 
      img: '/imgenes/salud y belleza.jpeg', 
      nombre: 'Belleza',
      slug: 'belleza',
      description: 'Productos de belleza y cuidado personal'
    },
    { 
      img: '/imgenes/catecoria mobiles.jpg', 
      nombre: 'Móviles',
      slug: 'moviles',
      description: 'Los últimos modelos de smartphones y accesorios'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorías</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[500px]"
          >
            <div className="h-[300px] overflow-hidden">
              <img 
                src={category.img} 
                alt={category.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{category.nombre}</h3>
              <p className="text-gray-600 flex-grow">{category.description}</p>
              <Link 
                to={`/category/${category.slug}`}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 mt-4 block text-center"
              >
                Ver productos
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}