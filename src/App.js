import './App.css';
import React from 'react';
import { ProductsCard } from './components/ProductsCard';
import ProductsList from '../src/data/productsList.json'
import styled from 'styled-components';
import Header from './components/Header'
import Filters from './components/Filters';
import ImagemFundo from './components/./img/essavai.jpg'
import Depositions from './components/Depositions';

const Container = styled.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  background-image: url(${ImagemFundo});
  color: #Ed4e45;
`
const CardInContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const CardConteiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const FilterContainer = styled.div`
  margin-top: 100px;
  margin-left: 10px;
`
const QuantSection = styled.section`
  text-align: center;
  display: block;
  background-color: rgb(73, 186, 181, 0.3);
  padding: 5px;
  color: #Ed4e45;

`

const ButtonCard = styled.button`
  padding: 10px;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  background-color: #c3887d;
  box-shadow: 2px 2px 2px 1px rgb(69, 156, 237, 0.2);
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
    order: "Crescente",
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
    alert(`O produto foi adicionado ao carrinho`)
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

  storageData = () => {
    localStorage.setItem("car", JSON.stringify(this.state.filterCar))
  }

  getData = () => {
     const filter = localStorage.getItem("car")

     const convertCar = JSON.parse(filter)

     convertCar && this.setState({filterCar: convertCar})


  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate () {
    this.storageData()
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
      .sort((productA, productB) => this.state.order === "Crescente" ? productA.value - productB.value : productB.value - productA.value)
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
        <Header onClick={this.onClickDelete} filterCar={this.state.filterCar} totalCar={this.state.totalCar} />

        <QuantSection>{`Quantidade de Produtos: ${listProduct.length}`}</QuantSection>
        <Container>
          <FilterContainer>
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
          </FilterContainer>
          <CardInContainer>
            {listProduct}
          </CardInContainer>
        </Container>
        <Depositions>

        </Depositions>
        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
