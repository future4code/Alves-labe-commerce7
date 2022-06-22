import React, { Component } from 'react'
import { Filtro, Form, Inputs, Select } from "./FiltersStyled.jsx";


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
          Ordenação:
          <Select name="select" value={this.props.order} onChange={this.props.onChangeOrder}>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </Select>
      </Filtro>
    )
  }
}
