import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductsCard} from './ProductsCard'

const ContainerProducts = styled.div`
  display: flex;
  border: 1px solid red;
  max-width: 80%;
  max-height: 80%;
`

export class Products extends Component {
  render() {
    return (
      <ContainerProducts>
        <ProductsCard />
      </ContainerProducts>
    )
  }
}
