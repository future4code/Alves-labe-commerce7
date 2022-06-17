import './App.css';
import React from 'react';
import { ProductsCard } from './components/ProductsCard';
import ProductsList from '../src/data/productsList.json'
import styled from 'styled-components';
import Header from './components/Header'

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

  onClickAdd = (id) => {
    this.state.products.map((product) => {
      if (product.id === id) {
        this.state.filterCar = [...this.state.filterCar, product]
        this.setState({ filterCar: this.state.filterCar })
        product.quant = product.quant + 1
        this.setState({ totalCar: this.state.totalCar + product.value })
      }
    })
    console.log('clicou')
  }

  onClickDelete = (id) => {
    this.state.products.map((product) => {
      if (product.id === id) {
        if (product.quant > 0) {
          product.quant = product.quant - 1
          this.setState({
            totalCar: this.state.totalCar - product.value
          })
        }
        if (product.quant <= 0) {
          let newListProducts = this.state.filterCar.filter((product) => {
            return product.id !== id
          })
          this.state.filterCar = newListProducts
          this.setState({
            filterCar: this.state.filterCar
          })
        }
      }
    })
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

  onChangeOrder = (event) => {
    this.setState({
      order: event.target.value
    })
  }


  render() {




    let listProduct = this.state.products
      .filter(product => {
        return product.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
      .filter(product => {
        return this.state.valueMin === "" || product.value >= this.state.valueMin
      })
      .filter(product => {
        return this.state.valueMax === "" || product.value <= this.state.valueMax
      })
      .sort((productA, productB) => this.state.order === 0 ? productA.value - productB.value : productB.value - productA.value)
      .map((product) => {
        return (
          <CardConteiner>
            <ProductsCard
              key={product.id}
              product={product}
            />
            <button onClick={() => this.onClickAdd(this.state.products.id)}>Comprar</button>
          </CardConteiner>
        )
      })

    return (
      <div>

        <Header />

        <Container>


          <label for="ValorMínimo">Valor Mínimo:</label>
          <input OnChange={this.onChangeValueMin} type="number" value={this.valueMin} id="ValorMínimo" placeholder='Valor Mínimo' />
          <label for="ValorMáximo">Valor Máximo:</label>
          <input OnChange={this.onChangeValueMax} type="number" value={this.valueMax} id="ValorMáximo" placeholder='Valor Máximo' />
          <label for="BuscaProdutos">Busca:</label>
          <input OnChange={this.onChangeSearch} type="text" value={this.search} id="BuscaProdutos" placeholder='Buscar Produtos' />

          <select name="select" value={this.order} onChange={this.onChangeOrder}>
            <option value="0">Crescente</option>
            <option value="1">Decrescente</option>
          </select>

          {listProduct}





        </Container>
      </div>
    );
  }
}

export default App;
