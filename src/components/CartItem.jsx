// Shopping cart page.
// Displays all items currently in the Redux cart, with controls to
// increment, decrement, or remove each one.
// Also shows the total amount and total quantity, and provides
// navigation back to ProductList or a stub "Checkout".

import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice.jsx';
import Navbar from './Navbar.jsx';

function CartItem({ onNavigateHome, onNavigateProducts }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Derived totals
  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({ name: item.name, quantity: item.quantity + 1 })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      // Removing instead of leaving quantity at 0
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Función de pago próximamente disponible. ¡Gracias por tu interés!');
  };

  // "Cart" link on the navbar — we are already here; no-op.
  const stayHere = () => {};

  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <div className="app-page">
        <Navbar
          activePage="cart"
          onNavigateHome={onNavigateHome}
          onNavigateProducts={onNavigateProducts}
          onNavigateCart={stayHere}
        />
        <main className="cart-page">
          <div className="cart-empty">
            <h2>Tu carrito está vacío</h2>
            <p>Explora nuestra colección y encuentra tu próxima planta favorita.</p>
            <button
              className="primary-btn"
              onClick={onNavigateProducts}
            >
              Ver Plantas
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="app-page">
      <Navbar
        activePage="cart"
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        onNavigateCart={stayHere}
      />

      <main className="cart-page">
        <div className="cart-summary">
          <h2 className="cart-title">Tu Carrito</h2>
          <div className="cart-totals-header">
            <span className="cart-total-items">
              Total de plantas: <strong>{totalQuantity}</strong>
            </span>
            <span className="cart-total-amount">
              Monto total: <strong>${totalAmount.toFixed(2)} USD</strong>
            </span>
          </div>
        </div>

        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.name} className="cart-item">
              <div className="cart-item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
              </div>

              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-unit-cost">
                  Precio unitario: ${item.cost.toFixed(2)} USD
                </p>

                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    onClick={() => handleDecrement(item)}
                    aria-label="Disminuir cantidad"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleIncrement(item)}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>

                <p className="cart-item-subtotal">
                  Subtotal:{' '}
                  <strong>
                    ${(item.cost * item.quantity).toFixed(2)} USD
                  </strong>
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <div className="cart-actions">
          <button
            className="secondary-btn"
            onClick={onNavigateProducts}
          >
            Seguir Comprando
          </button>
          <button
            className="primary-btn"
            onClick={handleCheckout}
          >
            Pagar
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
