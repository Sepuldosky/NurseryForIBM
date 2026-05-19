// Product listing page.
// Displays all plants grouped by category as a grid of cards.
// Each card has an "Agregar al Carrito" button that:
//   - Dispatches addItem to Redux store.
//   - Becomes disabled once that plant exists in the cart.

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice.jsx';
import plants from '../data/plants.js';
import Navbar from './Navbar.jsx';

function ProductList({ onNavigateHome, onNavigateCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Set of plant names already in the cart — used to disable buttons.
  const namesInCart = cartItems.map((item) => item.name);

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        name: plant.name,
        image: plant.image,
        cost: plant.cost,
      })
    );
  };

  // "Plants" link on the navbar — we are already here; no-op handler.
  const stayHere = () => {};

  return (
    <div className="app-page">
      <Navbar
        activePage="products"
        onNavigateHome={onNavigateHome}
        onNavigateProducts={stayHere}
        onNavigateCart={onNavigateCart}
      />

      <main className="products-page">
        <h2 className="products-title">Nuestra Colección</h2>

        {plants.map((category) => (
          <section key={category.category} className="category-section">
            <h3 className="category-title">{category.category}</h3>
            <div className="products-grid">
              {category.items.map((plant) => {
                const isInCart = namesInCart.includes(plant.name);
                return (
                  <article key={plant.name} className="product-card">
                    <div className="product-image-wrapper">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="product-image"
                      />
                    </div>
                    <div className="product-info">
                      <h4 className="product-name">{plant.name}</h4>
                      <p className="product-cost">${plant.cost.toFixed(2)} USD</p>
                      <p className="product-description">{plant.description}</p>
                      <button
                        className="add-btn"
                        disabled={isInCart}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {isInCart ? 'Agregada ✓' : 'Agregar al Carrito'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
