import React, { Component } from 'react'
import styled from 'styled-components'
import Monstrinho1 from './img/monstrinho1.png'
import Monstrinho2 from './img/monstrinho2.png'
import Monstrinho3 from './img/monstrinho3.png'

const ContainerDepositions = styled.div`
    background-color: #C3887d ;
`

const TitleDepositions = styled.h2`
  text-align: center;
`

const CardDepositions = styled.div`
  display: flex;
`


const ArrayDepositions = [
    {
        nome: "ET Bilu",
        planeta: "Marte",
        foto: <img src={Monstrinho1}/>,
        depoimento: "Usei o serviço da StarTrip Marte para ir passar as férias na Terra Gostei muito da experiência, apesar de achar os terráqueos estranhos. Recomendo a empresa."
        
    },
    {
        nome: "Cow Crazy",
        planeta: "Plutão",
        foto: <img src={Monstrinho3}/>,
        depoimento: "A empresa não forneceu o translado gratuito até Netuno. Alegou que por Plutão não ser considerado planeta, o translado deveria ser pago pelo cliente, achei uma falta de respeito. Não faça negócios com essa empresa e sim Plutão é um Planeta."
    },
    {
        nome: "Alf",
        planeta: "Melmac",
        foto: <img src={Monstrinho2}/>,
        depoimento: "A StarTrip ajudou muito a todos de meu planeta após aquele desastre horrível. Ela enviou gratuitamente naves para nos resgatar e levou até com planetas que estavam dispostos a nos acolher. Muito Obrigada StarTrip"
    }
]

export default class Depositions extends Component {
  render() {
    
    const listaDepositions = ArrayDepositions.map((deposition) => {
      return(
        <CardDepositions>
        {deposition.foto}
        {deposition.nome}
        {deposition.depoimento}
        </CardDepositions>
      )
    })
    
    return (
      <ContainerDepositions>
        <TitleDepositions> Depoimentos </TitleDepositions>
        <CardDepositions>
          {listaDepositions}
        </CardDepositions>
        </ContainerDepositions>
    )
  }
}
