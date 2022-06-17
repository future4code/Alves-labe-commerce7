import './App.css';
import React from 'react';
import { ProductsCard } from './components/ProductsCard';
import ProductsList from '../src/data/productsList.json'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px red solid;
  width: 100%;
`
const CardConteiner = styled.div`
  border: 1px solid blue;
  width: 30%;
`

class App extends React.Component {
  state = {
    products: ProductsList,
    filterCar: [],
    valueMin: '',
    valueMax: '',
    totalCar: 0,
    stateButton: false,
    order: 1,
    search: ''

  }

  onClickAddCar = (id) => {
    // this.state.products.map((product) => {
    //   if(product.id === id){
    //     this.state.filterCar = [...this.state.filterCar, product]
    //     this.setState({filterCar: this.state.filterCar})
    //     product.quant = product.quant + 1
    //     this.setState({totalCar: this.state.totalCar + product.value})

    //   }
    // })
    console.log('clicou')
  }

  onChangeValueMin = (event) => {
    this.setState({
      valueMin: event.target.value,
      
    })
  }
  onChangeValueMax = (event) => {
    this.setState({
      valueMax: event.target.value,

    })
  }
  onChangeSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }


  render() {
    let listProduct = this.state.products
    .map((product) => {
      return(
        <CardConteiner>
          <ProductsCard
          key={product.id} 
          product={product}
          />
          <button onClick = {() => this.onClickAddCar(this.state.products.id)}>Comprar</button>
        </CardConteiner>
      )
    })
    return (
      
      <Container>
        <label for="ValorMínimo">Valor Mínimo:</label> 
        <input OnChange={this.onChangeValueMin} type="number" value={this.valueMin} id="ValorMínimo" placeholder='Valor Mínimo'/>
        <label for="ValorMáximo">Valor Máximo:</label>
        <input OnChange={this.onChangeValueMax} type="number" value={this.valueMax} id="ValorMáximo" placeholder='Valor Máximo' />
        <label for="BuscaProdutos">Busca:</label>
        <input OnChange={this.onChangeSearch} type="text" value={this.search} id="BuscaProdutos" placeholder='Buscar Produtos' />
        
        {listProduct}
        

        </Container>
     
    );
  }
}

export default App;
