import React, { Component } from 'react'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from './Cart'

export default class Header extends Component {
    state = {
        shopping: false
    }

    showCart = () => {
        this.state.shopping = !this.state.shopping
        this.setState({
            shopping: this.state.shopping
        })
        console.log('oi')
    }
    render() {
        let componentCart
        if (this.state.shopping) {
            componentCart = <Cart onClick={this.props.onClick} items={this.props.filterCar} totalCar={this.props.totalCar} />
        }
        return (
            <div>

                <button onClick={this.showCart}>Clicar</button>

                {componentCart}
            </div>
        )
    }
}
