import { Link } from 'react-router-dom';

export default function Brands() {
  const brands = [
    {
      name: 'Nike',
      icon: '✓',
      category: 'moda-hombre'
    },
    {
      name: "Levi's",
      icon: '👖',
      category: 'moda-hombre'
    },
    {
      name: 'Adidas',
      icon: '⚡',
      category: 'moda-hombre'
    },
    {
      name: 'Converse',
      icon: '⭐',
      category: 'moda-mujer'
    },
    {
      name: 'Yamaha',
      icon: '🎵',
      category: 'musica'
    },
    {
      name: 'Casio',
      icon: '🎹',
      category: 'musica'
    },
    {
      name: 'Shure',
      icon: '🎤',
      category: 'musica'
    },
    {
      name: 'Apple',
      icon: '🍎',
      category: 'moviles'
    },
    {
      name: 'Samsung',
      icon: '📱',
      category: 'moviles'
    },
    {
      name: 'Xiaomi',
      icon: '📱',
      category: 'moviles'
    },
    {
      name: 'Maybelline',
      icon: '💄',
      category: 'belleza'
    },
    {
      name: 'Carolina Herrera',
      icon: '✨',
      category: 'belleza'
    },
    {
      name: 'Nivea',
      icon: '💙',
      category: 'belleza'
    },
    {
      name: 'Huggies',
      icon: '👶',
      category: 'bebes-juguetes'
    },
    {
      name: 'Barbie',
      icon: '💖',
      category: 'bebes-juguetes'
    },
    {
      name: 'LEGO',
      icon: '🧱',
      category: 'bebes-juguetes'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marcas</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <Link
            key={index}
            to={`/category/${brand.category}`}
            className="bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:border-green-500 transition-all duration-300 p-6 flex flex-col items-center justify-center h-40"
          >
            <div className="text-5xl mb-3">{brand.icon}</div>
            <p className="text-lg font-bold text-gray-800 text-center">{brand.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
