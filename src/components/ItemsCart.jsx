import React, { Component } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Itens } from "./ItemsCartStyled.jsx";

export default class ItemsCart extends Component {
 
  render() {
    return (
      <Itens>
          <h4>{this.props.quant} X </h4>
          <h3>{this.props.name}</h3>
          <p>R${this.props.value}</p>
          <button onClick={() => this.props.onClick(this.props.id)}><RiDeleteBinLine /></button>
      </Itens>
    )
  }
}
