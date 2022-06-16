import React, { Component } from 'react'
import styled from 'styled-components'

const Filtro = styled.div `
display: flex;
justify-content: center;
align-items: center;`

const TextoFiltro = styled.h4 `
text-align: Center;`

export default class Filters extends Component {

  state = {
    ValorInputContadorMin: "",
    ValorInputContadorMax: "",
    ValorInputPesquisarPorNome: "",
  }

  OnChangeValorInputContadorMin = (event) => {
    this.setState({
      ValorInputContadorMin: event.target.value

    })
    
  }

  OnChangeValorInputContadorMax = (event) => {
    this.setState({
      ValorInputContadorMax: event.target.value
    })
  }

  OnChangeValorInputPesquisaPorNome = (event) => {
    this.setState({
      ValorInputPesquisarPorNome: event.target.value
    })
  }

  render() {
    return (
     <div>
       <TextoFiltro> Busque Nossas Categorias de Subprodutos</TextoFiltro>
       <Filtro>
        <label for="ValorMínimo">Valor Mínimo:</label>
        <input OnChange={this.OnChangeValorInputContadorMin} 
        type="Number" 
        // value={this.state.ValorInputContadorMin}
        id="ValorMínimo"
        placeholder='Valor Mínimo' />

        <label for="ValorMáximo">Valor Máximo:</label>
        <input OnChange={this.OnChangeValorInputContadorMax} 
        type="Number" 
        value={this.state.ValorInputContadorMax}
        id="ValorMáximo"
        placeholder='Valor Máximo' />

        <label for="BuscaProdutos">Busca:</label>
        <input OnChange={this.OnChangeValorInputPesquisaPorNome} 
        type="text" 
        // value={this.state.ValorInputPesquisarPorNome}
        id="BuscaProdutos"
        placeholder='Buscar Produtos' />

        
      </Filtro>
     </div>
    )
  }
}
