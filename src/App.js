import React from 'react';
import { ProductsCard } from './components/ProductsCard';
import ProductsList from '../src/data/productsList.json'
import Header from './components/Header'
import Filters from './components/Filters';
import Depositions from './components/Depositions';
import Insta from './components/img/insta.png';
import Face from './components/img/face.png';
import Twitter from './components/img/twitter.png';
import {Container, CardInContainer, CardConteiner, FilterContainer, QuantSection, ButtonCard, Footer, DivRedes, Contato, Desenvolvimento} from "./styledApp"

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

    convertCar && this.setState({ filterCar: convertCar })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
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
        <Depositions />
        <Footer>
          <DivRedes>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={Insta} alt="ícone instagram" />
            </a>
            <a href="https://pt-br.facebook.com/" target="_blank">
              <img src={Face} alt="ícone facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src={Twitter} alt="ícone twitter" />
            </a>
          </DivRedes>

          <Desenvolvimento>
            <ul>
            <p>Desenvolvido por:</p>
            <li>Lucas Magalhães</li>
            <li>Nicole Prim</li>
            <li>Raquel Baptista Burger</li>
            </ul>
          </Desenvolvimento>

        </Footer>
        <Contato>
            <h3>Onde nos encontrar:</h3>
            <p>Sistema Solar, Via Láctea, Aglomerado de Virgem, Superaglomerado Laniakea, Universo Observável </p>
          </Contato>
      </div>
    );
  }
}

export default App;
