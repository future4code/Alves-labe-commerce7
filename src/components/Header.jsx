import React, { Component } from 'react'
import Cart from './Cart'
import styled from 'styled-components'
import Logo from './img/logospacetrip.png'
import Carrinho from './img/test1.png'

const HeaderContainer = styled.header`
    width:100%;
    height: 8rem;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(73, 186, 181, 0.5);
    padding-top: 5px;
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
            max-width: 40%;
        }
`

const LogoHeader = styled.img`
    width: 35%;
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
                    <LogoHeader src={Logo} alt="Logo" />

                </Container>
                <ButtonDiv>
                    <CartButton onClick={this.showCart}> <img src={Carrinho} alt='Astronauta com carrinho de compras'/> </CartButton>
                </ButtonDiv>
                {componentCart}
            </HeaderContainer>
        )
    }
}
