import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CategorySlider() {
  // config del slider de categorias
  const settings = {
    dots: true, // con puntitos pa q se vea mas bonito
    infinite: true,
    slidesToShow: 5, // 5 categorias a la vez en pc
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000, // cambia cada 4 seg
    pauseOnHover: true, // pa q pare cuando pasai el mouse x encima
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = [
    {
      title: 'Música',
      image: '/imgenes/cotegoria musica.jpeg',
      slug: 'musica'
    },
    {
      title: 'Moda Hombre',
      image: '/imgenes/categoria hombre.jpeg',
      slug: 'moda-hombre'
    },
    {
      title: 'Moda Mujer',
      image: '/imgenes/categoria mujer.jpeg',
      slug: 'moda-mujer'
    },
    {
      title: 'Supermercado',
      image: '/imgenes/categoria supermercado.jpg',
      slug: 'supermercado'
    },
    {
      title: 'Bebés y Juguetes',
      image: '/imgenes/bebes y jugetes.png',
      slug: 'bebes-juguetes'
    },
    {
      title: 'Libros',
      image: '/imgenes/libros para ninos.jpg',
      slug: 'libros'
    },
    {
      title: 'Belleza',
      image: '/imgenes/salud y belleza.jpeg',
      slug: 'belleza'
    },
    {
      title: 'Móviles',
      image: '/imgenes/catecoria mobiles.jpg',
      slug: 'moviles'
    }
  ];

  return (
    <div className="container my-10">
      <h3 className="text-3xl font-medium mb-5">Categorías Populares</h3>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg px-4 dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/category/${category.slug}`}>
              <img
                className="rounded-lg hover:shadow-green-300 transition-shadow shadow-md object-cover object-top w-full h-80"
                src={category.image}
                alt={category.title}
              />
              <div className="text-center">
                <h3 className="text-gray-900 mt-2 overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-xl tracking-tight dark:text-white">
                  {category.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}