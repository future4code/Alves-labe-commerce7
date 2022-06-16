import React, { Component } from 'react'
import styled from 'styled-components'
import Moon from './img/moon.jpg'
import Saturn from './img/saturn.jpg'
import Sun from './img/sun.jpg'
import SpaceShip from './img/spaceShip.jpg'
import { ProductsCard } from './ProductsCard'

const ContainerProducts = styled.div`
  display: flex;
  border: 1px solid red;
  max-width: 80%;
  max-height: 80%;
`

export class Products extends Component {
  listaCards = [
    {
      id: 1,
      name: "Pacote Lua 15 dias",
      text: "Que tal passar as férias na Lua? Nosso pacote inclui, translado até a estação da Nasa, passagem classe ecônomica no ônibus espacial Columbia",
      value: 50.000,
      image: <img src={Moon} />
    },
    {
      id: 2,
      name: "Pacote Saturno 15 dias",
      text: "Que tal passar as férias em Saturno. Nosso pacote inclui, translado até a estação da Nasa, passagem classe ecônomica no ônibus espacial Columbia",
      value: 50.000,
      image: <img src={Saturn} />
    },
    {
      id: 3,
      name: "Pacote Sol 15 dias",
      text: "Que tal fugir do frio e se bronzear direto na fonte??. Nosso pacote inclui, translado até a estação da Nasa, passagem classe ecônomica no ônibus espacial Columbia",
      value: 50.000,
      image: <img src={Sun} />
    },
    {
      id: 4,
      name: "Cruzeiro interestelas",
      text: "Que tal passar os dias em alto céu?. Nosso pacote inclui, translado até a estação da Nasa, passagem classe ecônomica no ônibus espacial Columbia",
      value: 50.000,
      image: <img src={SpaceShip} />
    },
  ]
  render() {
    const componentsCard = this.listaCards.map((card) => {
      return (
        <ProductsCard key={card.id}
        id = {card.id}
        name = {card.name}
        text = {card.text}
        value = {card.value}
        image = {card.image}
        />
      )
    })
    return (
      <div>
        {componentsCard}
      </div>
        
     
    )
  }
}
