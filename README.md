# ProyectoFinalDonaggio - MercadoCL

E-commerce desarrollado con React como proyecto final del curso de React.

## Descripción

MercadoCL es una aplicación web de e-commerce que permite navegar por productos, agregarlos al carrito y finalizar la compra. Utiliza Firebase/Firestore para almacenar productos y órdenes.

## Tecnologías

- React 18.3.1
- Vite
- React Router DOM
- Firebase/Firestore
- Tailwind CSS
- React Hot Toast

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` con las credenciales de Firebase:
```env
VITE_FIREBASE_API_KEY=AIzasyDj0AfXLredYbBUvRZgvdlOl8ujLeKwA
VITE_FIREBASE_AUTH_DOMAIN=mercadocl-b6496.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=mercadocl-b6496
VITE_FIREBASE_STORAGE_BUCKET=mercadocl-b6496.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=60172737234
VITE_FIREBASE_APP_ID=1:60172737234:web:22cdffca15f0945bf9e2b6b
```

4. Iniciar servidor:
```bash
npm run dev
```

## Funcionalidades

- Catálogo de productos con filtrado por categorías
- Vista detallada de productos
- Carrito de compras
- Lista de favoritos
- Checkout con validación de formularios
- Generación de órdenes en Firebase

## Estructura

```
src/
├── components/     # Componentes (Item, ItemList, ItemDetail, etc.)
├── context/        # Context API (Cart, Wishlist)
├── pages/          # Páginas (Cart, Categories, Wishlist)
├── services/       # Servicios Firebase (products, orders)
└── config/         # Configuración Firebase
```

## Autor

Luca Donaggio