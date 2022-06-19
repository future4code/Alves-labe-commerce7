import React, { Component } from 'react'
import styled from 'styled-components'
import Monstrinho1 from './img/monstrinho1.png'
import Monstrinho2 from './img/monstrinho2.png'
import Monstrinho3 from './img/monstrinho3.png'

const ContainerDepositions = styled.div`
  color: #424c54;
    background-color: rgb(73, 186, 181, 0.3) ;
`

const ContainerFlexDepositions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const TitleDepositions = styled.h1`
  text-align: center;
 padding: 1rem;
`
const CardDepositions = styled.div`
  display: flex;
  border: 1px solid rgb(237, 78, 69, 0.5);
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  border-radius: 10px;
  width: 30%;
  align-items: center;
  margin-bottom: 5px;

  img {
    border-radius: 50%;
    height: 70px;
    min-width: 80px;
    border: 3px dotted #49bab5 ;
    padding: 2px;
    margin: 2px;
  }
  &:hover{
    box-shadow: 
      3px 3px 6px #ccc,
      -6px -6px 3px #333,
      -9px 9px 7px #555,
      12px -12px 7px #444
  }
`

const TextDepositions = styled.text`
  text-align: start;
  padding: 2px;
`

const ArrayDepositions = [
  {
    nome: "ET Bilu",
    planeta: "Marte",
    foto: <img src={Monstrinho1} />,
    depoimento: "Usei o serviço da StarTrip Marte para ir passar as férias na Terra Gostei muito da experiência, apesar de achar os terráqueos estranhos. Recomendo a empresa."
  },
  {
    nome: "Cow Crazy",
    planeta: "Plutão",
    foto: <img src={Monstrinho3} />,
    depoimento: "A empresa não forneceu o translado gratuito até Netuno. Alegou que por Plutão não ser considerado planeta, o translado deveria ser pago pelo cliente, achei uma falta de respeito. Não faça negócios com essa empresa e sim Plutão é um Planeta."
  },
  {
    nome: "Alf",
    planeta: "Melmac",
    foto: <img src={Monstrinho2} />,
    depoimento: "A StarTrip ajudou muito a todos de meu planeta após aquele desastre horrível. Ela enviou gratuitamente naves para nos resgatar e levou até os planetas que estavam dispostos a nos acolher. Muito Obrigada StarTrip"
  }
]

export default class Depositions extends Component {
  render() {

    const listaDepositions = ArrayDepositions.map((deposition) => {
      return (
        <CardDepositions>
          {deposition.foto}
          <TextDepositions>
            <h3>{deposition.nome}</h3>
            <p>Planeta: {deposition.planeta}</p>
            {deposition.depoimento}
          </TextDepositions>
        </CardDepositions>
      )
    })

    return (
      <ContainerDepositions>
        <TitleDepositions> Depoimentos </TitleDepositions>
        <ContainerFlexDepositions>
          {listaDepositions}
        </ContainerFlexDepositions>
      </ContainerDepositions>
    )
  }
}
