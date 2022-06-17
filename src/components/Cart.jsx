import React, { Component } from 'react'
import ItemsCart from './ItemsCart'

export default class Cart extends Component {
    state = {
        cart: this.props.items,
        quant: 0
    }

    delCart = (id) => {
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
      <div>
          <h1>Carrinho</h1>
          <div>
              {componentItem}
          </div>
          <div>
              {this.props.items.lenght === 0 ? 'Carrinho Vazio' : `Valor Total: R$ ${this.props.totalCar}`}
          </div>
          <button>Finalizar Compra</button>
      </div>
    )
  }
}
