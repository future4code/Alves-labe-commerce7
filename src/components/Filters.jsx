import React, { Component } from 'react'
import styled from 'styled-components'
import Imagem from './img/imgdois.jpg'

const Filtro = styled.div`
  background-image: url(${Imagem});
  height: 7rem;
`

const Form = styled.label`
  color: purple;
  align-items: center;
`

const Inputs = styled.input`
  background: transparent;
`

export default class Filters extends Component {
  render() {
    return (
      <Filtro>
          <Form>Valor Mínimo:
          <Inputs onChange={this.props.onChangeValueMin} type="number" value={this.props.valueMin} id="ValorMínimo" placeholder='Valor Mínimo' />
          </Form>
          <Form>Valor Máximo:
          <Inputs onChange={this.props.onChangeValueMax} type="number" value={this.props.valueMax} id="ValorMáximo" placeholder='Valor Máximo' />
          </Form>
          <Form>Busca:
          <Inputs onChange={this.props.onChangeSearch} type="text" value={this.props.search} id="BuscaProdutos" placeholder='Buscar Produtos' />
          </Form>
          <select name="select" value={this.props.order} onChange={this.props.onChangeOrder}>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
      </Filtro>
    )
  }
}
