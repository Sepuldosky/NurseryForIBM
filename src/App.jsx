import { useState } from 'react';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

// App is the root component. It controls which page is shown
// through the `currentPage` state — no react-router used.
// Possible values: 'landing' | 'products' | 'cart'.

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const goToLanding = () => setCurrentPage('landing');
  const goToProducts = () => setCurrentPage('products');
  const goToCart = () => setCurrentPage('cart');

  if (currentPage === 'products') {
    return (
      <ProductList
        onNavigateHome={goToLanding}
        onNavigateCart={goToCart}
      />
    );
  }

  if (currentPage === 'cart') {
    return (
      <CartItem
        onNavigateHome={goToLanding}
        onNavigateProducts={goToProducts}
      />
    );
  }

  // Default view: landing page
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-left">
          <h1>Sugarbread Nursery</h1>
          <div className="landing-divider"></div>
          <p className="landing-tagline">
            Donde lo verde se encuentra con lo dulce
          </p>
          <button
            className="get-started-btn"
            onClick={goToProducts}
          >
            Comenzar
          </button>
        </div>
        <div className="landing-right">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default App;
