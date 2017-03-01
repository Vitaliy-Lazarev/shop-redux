import React from 'react';
import { Link } from 'react-router';
import store from '../../store';

// Using "Stateless Functional Components"
export default function(props) {

  function subscribe() {

    let unsubscribe = store.subscribe(() =>

      document.getElementsByClassName('cart-head').innerHTML = store.getState().productState.quantity

    )

  }

  subscribe();

  return (
    <div className="app">
      <header className="primary-header">
        <div className="container">
          <div className="logo"><Link to="/">Logo Store</Link></div>

          <aside className="primary-aside">
            <ul>
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/products" activeClassName="active">Category</Link></li>
              <li><Link to="/cart" activeClassName="active">Cart</Link></li>
            </ul>
          </aside>
          <div className="cart-head">

          </div>
        </div>


      </header>
      <main>
        {props.children}
      </main>

      <footer className="primary-footer">

        <div className="container">
          <div className="logo">Logo Store</div>

          <aside className="primary-aside">
            <ul>
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/products" activeClassName="active">Category</Link></li>
              <li><Link to="/cart" activeClassName="active">Cart</Link></li>
            </ul>
          </aside>
        </div>

      </footer>
    </div>
    );
}
