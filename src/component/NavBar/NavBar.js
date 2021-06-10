import React, { Component } from 'react';
import CartWidget from "../CartWidget/CartWidget";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>Mi eQR market</h1>
                <ul>
                    <li>Electronica</li>
                    <li>Cursos</li>
                    <li>e-Book</li>
                </ul>
                <CartWidget />
            </div>
        )
    }
}
