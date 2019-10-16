import React , { Fragment } from 'react';
import { BrowserRouter , Route ,Switch  } from 'react-router-dom'
import './App.css';


import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'

import Header from './components/Navbar'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Fragment>
          <Header/>
          <section className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/product" component={ProductPage}/>
              <Route exact path="/cartpage" component={CartPage} />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
