import React, { Component } from 'react'
import styled from 'styled-components'


const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 270px;
  height: 350px;
  background-color: rgb(69, 156, 237, 0.3);
  
`

const HeaderCard = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;

`
const TextCard = styled.div`
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;

`
const ValueCard = styled.div`
  text-align: center;
  color: #49bab5;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`

const ImageCard = styled.img`
  width: auto;
  max-height: 150px;
  
`


export class ProductsCard extends Component {
  render() {
    return (
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
    )
  }
}
