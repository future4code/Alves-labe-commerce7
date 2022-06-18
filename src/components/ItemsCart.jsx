import React, { Component } from 'react'
// import { TbShoppingCartX } from 'react-icons/tb'

export default class ItemsCart extends Component {
 
  render() {
    return (
      <div>
          <div>{this.props.quant} X </div>
          <div>{this.props.name}</div>
          <div>R${this.props.value}</div>
          <button onClick={() => this.props.onClick(this.props.id)}>Deletar</button>
      </div>
    )
  }
}
