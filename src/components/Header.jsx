import React, { Component } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from './Cart'
import styled from 'styled-components'
import Imagem from './img/imgdois.jpg'
import Logo from './img/logospacetrip.png'
import Carrinho from './img/test1.png'

const HeaderContainer = styled.header`
    width:100%;
    height: 12rem;
    display:flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Imagem});
`

const Titulo = styled.h1`
    justify-content: space-around;
    display: flex;
    img {
        width: 37%;
    }
`

const ButtonDiv = styled.div`
    display:flex;
    align-items: center;
`

const CartButton = styled.button`
    position: fixed;
    border: none;;
    justify-content: space-around;
    color: white;
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
        img {
            width: 30%;
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
                    <Titulo><img src={Logo} alt="logo" /></Titulo>

                </Container>
                <ButtonDiv>
                    <CartButton onClick={this.showCart}> <img src={Carrinho}/> </CartButton>
                </ButtonDiv>
                {componentCart}
            </HeaderContainer>
        )
    }
}
