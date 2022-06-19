import React, { Component } from 'react'
import Cart from './Cart'
import Logo from './img/logospacetrip.png'
import Carrinho from './img/astronauta.png'
import { HeaderContainer, ButtonDiv, CartButton, LogoHeader, Container } from "./HeaderStyled.jsx";

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
                    <CartButton onClick={this.showCart}> <img src={Carrinho} alt='Astronauta com carrinho de compras' /> </CartButton>
                </ButtonDiv>
                {componentCart}
            </HeaderContainer>
        )
    }
}
