import React, { Component } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import styled from 'styled-components'

const Itens = styled.div`
  svg {
    color: red;
    font-size: 1rem;
    background: transparent;
  }

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  border-bottom:solid 1px;
  border-top:solid 1px;

`


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
