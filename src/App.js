import './App.css';
import React from 'react';
import { ProductsCard } from './components/ProductsCard';
import ProductsList from '../src/data/productsList.json'
import styled from 'styled-components';
import Header from './components/Header'
import Filters from './components/Filters';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px red solid;
  width: 100%;
  background-color: #49bab5;

`
const CardConteiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const ButtonCard = styled.button`
  padding: 10px;
  background-color: #ed4e45;
  border: none;
  font-size: large;
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
            <ButtonCard onClick={() => this.onClickAdd(product.id)}>Adicionar ao carrinho</ButtonCard>
          </CardConteiner>
        )
      })

    return (
      <div>
        <Header onClick={this.onClickDelete} filterCar={this.state.filterCar} totalCar={this.state.totalCar}/>

        
        <Filters 
        onChangeValueMin={this.onChangeValueMin}
        onChangeValueMax={this.onChangeValueMax}
        valueMin={this.state.valueMin}
        valueMax={this.state.valueMax}
        onChangeSearch={this.onChangeSearch}
        search={this.state.search}
        order={this.state.order}
        onChangeOrder={this.onChangeOrder}
        />

       <label>{`Quantidade de Produtos: ${listProduct.length}`}</label>
        <Container>
          

          {listProduct}

        </Container>

      </div>
    );
  }
}

export default App;
