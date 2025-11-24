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
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
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