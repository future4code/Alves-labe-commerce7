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
  box-shadow: 2px 2px 2px 1px rgba(238, 152, 103, 0.973);
  max-width: 300px;
  height: 350px;
  
`

const HeaderCard = styled.div`
  text-align: center;

`
const TextCard = styled.div`
  text-align: center;

`
const ValueCard = styled.div`
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
          </HeaderCard>
          <ImageCard 
          src={this.props.product.image}/>
          <TextCard>
          {this.props.product.text}
          </TextCard>
          <ValueCard>
          R${this.props.product.value}
          </ValueCard>
           
      </ContainerCard>
      </ContainerProducts>
    )
  }
}
