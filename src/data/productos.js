// productos del e-commerce
export const productos = [
  // SUPERMERCADO (5 productos)
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
  },

  // LIBROS (3 productos)
  {
    id: '6',
    name: 'Cien Años de Soledad',
    category: 'libros',
    price: 15000,
    stock: 45,
    image: '/imgenes/Cien Años de Soledad.jpg',
    description: 'El clásico de Gabriel García Márquez. La historia de la familia Buendía que no te puedes perder!'
  },
  {
    id: '7',
    name: 'El Principito',
    category: 'libros',
    price: 8000,
    stock: 60,
    image: '/imgenes/El Principito.jpg',
    description: 'La historia más linda de Antoine de Saint-Exupéry. Pa leer y regalar a quien sea!'
  },
  {
    id: '8',
    name: 'Harry Potter y la Piedra Filosofal',
    category: 'libros',
    price: 12000,
    stock: 35,
    image: '/imgenes/Harry Potter y la Piedra Filosofal.jpg',
    description: 'El primer libro de Harry Potter! Si no lo has leído, estai perdiendo tiempo compadre.'
  },

  // MODA HOMBRE (3 productos)
  {
    id: '9',
    name: 'Polera Nike Básica',
    category: 'moda-hombre',
    price: 18000,
    stock: 75,
    image: '/imgenes/Polera Nike Básica .jpg',
    description: 'Polera Nike 100% algodón, cómoda pa cualquier ocasión. Calidad que se nota!'
  },
  {
    id: '10',
    name: "Jeans Levi's 501",
    category: 'moda-hombre',
    price: 35000,
    stock: 40,
    image: "/imgenes/Jeans Levi's 501.jpg",
    description: "Los jeans clásicos Levi's 501. Nunca pasan de moda y te duran años!"
  },
  {
    id: '11',
    name: 'Zapatillas Adidas Superstar',
    category: 'moda-hombre',
    price: 45000,
    stock: 30,
    image: '/imgenes/Zapatillas Adidas Superstar.jpg',
    description: 'Las zapatillas icónicas de Adidas. Cómodas, bonitas y pa toda la vida!'
  },

  // MODA MUJER (3 productos)
  {
    id: '12',
    name: 'Polera Oversize',
    category: 'moda-mujer',
    price: 12000,
    stock: 65,
    image: '/imgenes/Polera Oversize.jpg',
    description: 'Polera oversize súper cómoda y a la moda. Perfecta pa un look relajado!'
  },
  {
    id: '13',
    name: 'Jeans Skinny',
    category: 'moda-mujer',
    price: 28000,
    stock: 50,
    image: '/imgenes/Jeans Skinny.jpg',
    description: 'Jeans skinny que te quedan como anillo al dedo. Calce perfecto garantizado!'
  },
  {
    id: '14',
    name: 'Zapatillas Converse All Star',
    category: 'moda-mujer',
    price: 35000,
    stock: 55,
    image: '/imgenes/Zapatillas Converse All Star .jpg',
    description: 'Las clásicas Converse que nunca fallan. Combina con todo y son re cómodas!'
  },

  // BEBÉS Y JUGUETES (3 productos)
  {
    id: '15',
    name: 'Pañales Huggies (paquete)',
    category: 'bebes-juguetes',
    price: 15000,
    stock: 90,
    image: '/imgenes/Pañales Huggies (paquete).webp',
    description: 'Paquete de pañales Huggies ultra absorbentes. Los mejores pa tu bebé!'
  },
  {
    id: '16',
    name: 'Muñeca Barbie',
    category: 'bebes-juguetes',
    price: 18000,
    stock: 40,
    image: '/imgenes/Muñeca Barbie.jpg',
    description: 'La Barbie clásica que todas quieren. Regalo perfecto pa las niñitas!'
  },
  {
    id: '17',
    name: 'Lego Classic (caja mediana)',
    category: 'bebes-juguetes',
    price: 25000,
    stock: 35,
    image: '/imgenes/Lego Classic (caja mediana).jpg',
    description: 'Set de Lego Classic con piezas pa armar lo que se te ocurra. Diversión asegurada!'
  },

  // MÚSICA (3 productos)
  {
    id: '18',
    name: 'Guitarra Acústica Yamaha',
    category: 'musica',
    price: 85000,
    stock: 15,
    image: '/imgenes/Guitarra Acústica Yamaha .jpg',
    description: 'Guitarra acústica Yamaha de calidad profesional. Sonido increíble pa tocar lo que sea!'
  },
  {
    id: '19',
    name: 'Teclado Casio 61 teclas',
    category: 'musica',
    price: 120000,
    stock: 12,
    image: '/imgenes/Teclado Casio 61 teclas.png',
    description: 'Teclado Casio con 61 teclas y un montón de ritmos. Perfecto pa aprender o tocar en vivo!'
  },
  {
    id: '20',
    name: 'Micrófono Shure SM58',
    category: 'musica',
    price: 95000,
    stock: 20,
    image: '/imgenes/Micrófono Shure SM58.jpg',
    description: 'El micrófono legendario Shure SM58. El favorito de todos los cantantes!'
  },

  // MÓVILES (3 productos)
  {
    id: '21',
    name: 'iPhone 13 128GB',
    category: 'moviles',
    price: 650000,
    stock: 10,
    image: '/imgenes/iPhone 13 128GB.jpg',
    description: 'iPhone 13 con 128GB de almacenamiento. El celular más bacán del mercado!'
  },
  {
    id: '22',
    name: 'Samsung Galaxy A54',
    category: 'moviles',
    price: 350000,
    stock: 18,
    image: '/imgenes/Samsung Galaxy A54.jpg',
    description: 'Samsung Galaxy A54 con pantalla increíble y cámara de lujo. Relación precio-calidad brutal!'
  },
  {
    id: '23',
    name: 'Xiaomi Redmi Note 12',
    category: 'moviles',
    price: 220000,
    stock: 25,
    image: '/imgenes/Xiaomi Redmi Note 12.jpg',
    description: 'Xiaomi Redmi Note 12, el celular más vendido. Bueno, bonito y barato!'
  },

  // BELLEZA (3 productos)
  {
    id: '24',
    name: 'Set de Maquillaje Maybelline',
    category: 'belleza',
    price: 25000,
    stock: 30,
    image: '/imgenes/Set de Maquillaje Maybelline.jpg',
    description: 'Set completo de maquillaje Maybelline. Todo lo que necesitas pa verte linda!'
  },
  {
    id: '25',
    name: 'Perfume Carolina Herrera Good Girl',
    category: 'belleza',
    price: 75000,
    stock: 22,
    image: '/imgenes/Perfume Carolina Herrera Good Girl.jpg',
    description: 'Perfume Carolina Herrera Good Girl. El aroma más rico y elegante!'
  },
  {
    id: '26',
    name: 'Crema Facial Nivea',
    category: 'belleza',
    price: 8000,
    stock: 50,
    image: '/imgenes/Crema Facial Nivea.jpg',
    description: 'Crema facial Nivea hidratante. Cuida tu piel todos los días!'
  }
];
