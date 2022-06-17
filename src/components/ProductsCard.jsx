import React, { Component } from 'react'
import styled from 'styled-components'



const ContainerProducts = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 250px;
  height: 350px;
  
`

const HeaderCard = styled.div`
  text-align: center;

`

const ImageCard = styled.img`
  max-height: 30%;
  
`


export class ProductsCard extends Component {
  render() {
    return (
      <ContainerProducts>
      <ContainerCard>
          <HeaderCard>
            {this.props.product.name}
            R${this.props.product.value}
          </HeaderCard>
          <ImageCard 
          src={this.props.product.image}/>
           
      </ContainerCard>
      </ContainerProducts>
    )
  }
}
