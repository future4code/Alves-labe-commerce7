import React from 'react';
import Depositions from './components/Depositions.jsx';
import Filters from './components/Filters.jsx';
import { Products } from './components/Products';
import { ProductsCard } from './components/ProductsCard';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartItem from './components/ShoppingCartItem'

import './App.css';

class App extends React.Component {
  state = {
    produtos: [this.props.listaCards],
  };

  onClickAdd = () => {
    
  }

  render() {

    return (
      <div>
        {/* <Depositions /> */}
        {/* <Filters /> */}
        <Products />
        <ProductsCard />
        {/* <ShoppingCart /> */}
        <ShoppingCartItem />
      </div>
    );
  }
}

export default App;
