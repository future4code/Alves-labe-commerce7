import React, { Component } from 'react'
import { ContainerCard, HeaderCard, TextCard, ValueCard, ImageCard  } from "./ProductsCardStyled.jsx";

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
