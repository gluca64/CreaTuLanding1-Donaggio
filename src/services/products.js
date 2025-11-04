const products = [
  {
    id: '1',
    name: 'Empanadas de Pino',
    category: 'supermercado',
    price: 2500,
    stock: 100,
    image: '/imgenes/empanadas de pino.webp',
    description: 'Ricas empanadas de pino caseras, hechas con carne molida, cebolla, huevo y aceituna. Pa chuparse los dedos!'
  },
  {
    id: '2',
    name: 'Vino Carmenere',
    category: 'supermercado',
    price: 15000,
    stock: 50,
    image: '/imgenes/vino carmenare.png',
    description: 'El mejor vino chileno, un Carmenere con toques de frutos rojos. Pa un asado con los cabros!'
  },
  {
    id: '3',
    name: 'Sopaipillas',
    category: 'supermercado',
    price: 500,
    stock: 200,
    image: '/imgenes/Sopaipillas.JPG',
    description: 'Sopaipillas recién hechas con zapallo. Ideales pa los días de lluvia con pebre o chancaca!'
  },
  {
    id: '4',
    name: 'Manjar',
    category: 'supermercado',
    price: 3500,
    stock: 80,
    image: '/imgenes/manjar.webp',
    description: 'El verdadero manjar chileno, nada de dulce de leche. Pa ponerle a las marraquetas o hacer un brazo de reina!'
  },
  {
    id: '5',
    name: 'Merkén',
    category: 'supermercado',
    price: 2000,
    stock: 150,
    image: '/imgenes/merken.jpg',
    description: 'El condimento más pulento, directo del sur. Le da el toque a cualquier comida!'
  }
];

// pa simular q la wea se demora en cargar xd
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// funcion pa traer los productos
export const getProducts = async () => {
  await delay(1000); // le pongo delay pa q se vea el spinner
  return products;
};

// trae un producto x su id
export const getProductById = async (id) => {
  await delay(1000);
  return products.find(product => product.id === id);
};

// filtra x categoria
export const getProductsByCategory = async (categoryId) => {
  await delay(1000);
  return products.filter(product => product.category === categoryId);
};
