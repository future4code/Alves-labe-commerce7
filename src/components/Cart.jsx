import React, { Component } from 'react'
import ItemsCart from './ItemsCart'
import { Shopping, ButtonEnd } from './CartStyled.jsx';

export default class Cart extends Component {
    state = {
        cart: this.props.items,
    }
    delCart = () => {
        let newCartList = []
        this.setState({
            cart: newCartList
        })
    }

    render() {
        let componentItem = this.props.items.filter((item, index) => this.props.items.indexOf(item) === index).map((element) => {
            return (
                <ItemsCart
                    id={element.id}
                    key={element.id}
                    value={element.value}
                    image={element.image}
                    name={element.name}
                    quant={element.quant}
                    onDelete={() => this.delCart(element.id)}
                    onClick={this.props.onClick}
                />
            )
        })

        return (
            <Shopping>
                <h1>Carrinho de Compras</h1>
                <div>
                    {componentItem}
                </div>
                <div>
                    {this.props.items.lenght === 0 ? 'Carrinho Vazio' : `Valor Total: R$ ${this.props.totalCar}`}
                </div>
                <ButtonEnd>Finalizar Compra</ButtonEnd>
            </Shopping>
        )
    }
}
