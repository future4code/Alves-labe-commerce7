import React, { Component } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from './Cart'
import styled from 'styled-components'
import Imagem from './img/imgheader.jpg'
import Carrinho from './img/carrinho-foguete-arq.png'

const HeaderContainer = styled.header`
    width:100%;
    height: 10rem;
    display:flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${Imagem});
`

const Titulo = styled.h1`
    color: #c38b7d;
    justify-content: space-around;
    display: flex;
`

const ButtonDiv = styled.div`
    display:flex;
    align-items: center;
`

const CartButton = styled.button`
    position: fixed;
    border: none;;
    justify-content: space-around;
    color: #c38b7d;
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
        svg {
            font-size: 5rem;
        }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`


export default class Header extends Component {
    state = {
        shopping: false
    }

    showCart = () => {
        this.state.shopping = !this.state.shopping
        this.setState({
            shopping: this.state.shopping
        })
    }
    render() {
        let componentCart
        if (this.state.shopping) {
            componentCart = <Cart onClick={this.props.onClick} items={this.props.filterCar} totalCar={this.props.totalCar} />
        }
        return (
            <HeaderContainer>
                <Container>
                    <Titulo>StarTrip Viagens</Titulo>

                </Container>
                <ButtonDiv>
                    <CartButton onClick={this.showCart}> <AiOutlineShoppingCart/> </CartButton>
                </ButtonDiv>
                {componentCart}
            </HeaderContainer>
        )
    }
}
