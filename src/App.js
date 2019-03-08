import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import StoreNav from './StoreNav/StoreNav';
import Product from './Product/Product';
import ProductList from './ProductList/ProductList';
import './App.css';


// var closeX = document.getElementById("snipcart-close").getElementByTagName("a");
// var exit = document.createElement("div");
// exit.innerHTML = "<Button>EXIT</Button>";
// closeX.replaceChild(closeX, closeX);


class App extends Component {

  render() {
    return (
      <div className="App">
        <StoreNav />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </main>
      </div >
    );
  }
}

export default App;
