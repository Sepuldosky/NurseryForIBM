# NurseryForIBM — Sugarbread Nursery

Proyecto final del curso **"Developing Front-End Apps with React"** de IBM (Coursera).

Aplicación de comercio electrónico para una tienda de plantas con flor. Permite navegar el catálogo agrupado por categorías, agregar productos al carrito y gestionar las cantidades antes del pago.

## 🌐 Demo en vivo

**[https://sepuldosky.github.io/NurseryForIBM/](https://sepuldosky.github.io/NurseryForIBM/)**

## 🛠️ Stack

- **React 18** (con Vite)
- **Redux Toolkit** + **React-Redux** — manejo de estado global del carrito
- **CSS plano** — estilos sin frameworks
- **GitHub Pages** — despliegue

## 📁 Estructura del proyecto

```
NurseryForIBM/
├── public/
│   └── images/
│       ├── Nursery.jpg          # background landing
│       └── plants/              # thumbnails de las 9 plantas
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx          # descripción de la empresa
│   │   ├── Navbar.jsx           # barra de navegación reutilizable
│   │   ├── ProductList.jsx      # listado de plantas por categoría
│   │   └── CartItem.jsx         # página del carrito
│   ├── store/
│   │   ├── store.js             # configuración del store
│   │   └── CartSlice.jsx        # slice del carrito (addItem, removeItem, updateQuantity)
│   ├── data/
│   │   └── plants.js            # catálogo de 9 plantas en 3 categorías
│   ├── App.jsx                  # root + navegación por state
│   ├── App.css                  # estilos globales
│   └── main.jsx                 # entrypoint con Provider
└── vite.config.js               # base: '/NurseryForIBM/'
```

## 🎯 Funcionalidades

### Landing page
- Imagen de fondo + descripción de la empresa
- Botón "Comenzar" hacia el catálogo

### Catálogo de productos
- 9 plantas con flor en 3 categorías:
  - **Para Polinizadores**: Lavanda, Cosmos, Girasol Real
  - **Para Cortar y Ramos**: Boca de Dragón, Zinnia Benary, Zinnia
  - **Para Borduras y Macetas**: Aliso de Mar, Capuchina, Damasquina
- Botón "Agregar al Carrito" se deshabilita una vez agregada la planta
- Badge del carrito actualiza dinámicamente la cantidad total

### Carrito de compras
- Lista de items con imagen, nombre, precio unitario y subtotal
- Botones +/- para ajustar cantidad
- Botón "Eliminar" por item
- Decrementar en cantidad 1 elimina automáticamente la planta
- Total general (cantidad de plantas + monto en USD)
- Botón "Seguir Comprando" vuelve al catálogo
- Botón "Pagar" muestra mensaje "Próximamente"

## 🚀 Desarrollo local

```bash
# Clonar
git clone https://github.com/Sepuldosky/NurseryForIBM.git
cd NurseryForIBM

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
```

## 📦 Build y deploy

```bash
# Build de producción (genera carpeta dist/)
npm run build

# Vista previa local del build
npm run preview

# Deploy a GitHub Pages
npm run deploy
```

## 📝 Notas

- Marca interna de la app: **Sugarbread Nursery** (la consigna original del curso usaba "Paradise Nursery").
- Idiomas: contenido visible en español, código y nombres de archivo en inglés.
- Estado global gestionado con Redux Toolkit; el carrito persiste entre navegaciones de pestaña pero no entre sesiones (no se usa localStorage en este alcance).

## 📄 Licencia

Proyecto educativo. Sin licencia comercial con  IBM Skills Network Labs (SN Labs)
