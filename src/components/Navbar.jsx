// Reusable top navigation bar.
// Rendered inside ProductList and CartItem (NOT in the landing).
// Receives navigation handlers and the active page label from the parent.
// The cart badge is computed here from the Redux store.

import { useSelector } from 'react-redux';

function Navbar({
  activePage,
  onNavigateHome,
  onNavigateProducts,
  onNavigateCart,
}) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <div className="navbar-brand" onClick={onNavigateHome}>
        <span className="navbar-logo">🌱</span>
        <div className="navbar-title">
          <h1>Sugarbread Nursery</h1>
          <span className="navbar-tagline">Donde lo verde se encuentra con lo dulce</span>
        </div>
      </div>

      <nav className="navbar-links">
        <button
          className={`navbar-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={onNavigateHome}
        >
          Inicio
        </button>
        <button
          className={`navbar-link ${activePage === 'products' ? 'active' : ''}`}
          onClick={onNavigateProducts}
        >
          Plantas
        </button>
        <button
          className={`navbar-link navbar-cart ${activePage === 'cart' ? 'active' : ''}`}
          onClick={onNavigateCart}
          aria-label="Carrito"
        >
          <svg
            className="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="cart-badge">{totalItems}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
