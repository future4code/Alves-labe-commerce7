import React, { Component } from 'react'
import ItemsCart from './ItemsCart'
import styled from 'styled-components'

const Shopping = styled.div`
    position: fixed;
    right: 1%;
    top:10rem;
    min-height: 20%;
    max-height: 100%;
    width: 30%;
    background-color: #b8eeec;
    display:flex;
    color:black;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: -5px 5px 5px 0px rgba(0,0,0,0.2);
`





export default class Cart extends Component {
    state = {
        cart: this.props.items,
    }

    delCart = () => {
        let newCartList = []
        this.setState({
            cart: newCartList
        })
    }


  render() {
    let componentItem = this.props.items.filter((item, index) => this.props.items.indexOf(item) == index).map((element) =>  {
        return (
            <ItemsCart 
            id={element.id}
            key={element.id}
            value={element.value}
            image={element.image}
            name={element.name}
            quant={element.quant}
            onDelete = {() => this.delCart(element.id)}
            onClick = {this.props.onClick}
            />
        )
    })

    return (
      <Shopping>
          <h1>Carrinho de Compras</h1>
          <div>
              {componentItem}
          </div>
          <div>
              {this.props.items.lenght === 0 ? 'Carrinho Vazio' : `Valor Total: R$ ${this.props.totalCar}`}
          </div>
          <button>Finalizar Compra</button>
      </Shopping>
    )
  }
}
