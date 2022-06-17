import React, { Component } from 'react'
import styled from 'styled-components'
import ShoppingCartItem from './ShoppingCartItem'



const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 1000px;
  
`

const HeaderCard = styled.h1`
  text-align: center;

`
export class ProductsCard extends Component {
  render() {
    return (
      <ContainerCard>
          <HeaderCard>
            {this.props.name}
          </HeaderCard>
            {this.props.text}
            {this.props.value}
      </ContainerCard>

    )
  }
}
