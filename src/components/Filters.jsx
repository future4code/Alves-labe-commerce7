import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <div>
          <label>Valor Mínimo:
          <input onChange={this.props.onChangeValueMin} type="number" value={this.props.valueMin} id="ValorMínimo" placeholder='Valor Mínimo' />
          </label>
          <label>Valor Máximo:
          <input onChange={this.props.onChangeValueMax} type="number" value={this.props.valueMax} id="ValorMáximo" placeholder='Valor Máximo' />
          </label>
          <label>Busca:
          <input onChange={this.props.onChangeSearch} type="text" value={this.props.search} id="BuscaProdutos" placeholder='Buscar Produtos' />
          </label>
          <select name="select" value={this.props.order} onChange={this.props.onChangeOrder}>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
      </div>
    )
  }
}
