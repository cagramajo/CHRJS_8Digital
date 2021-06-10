import React, { Component } from 'react';
//mport CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <h1>Mi eQR market</h1>
                <ul>
                    <li>Electronica</li>
                    <li>Cursos</li>
                    <li>e-Book</li>
                </ul>
            </div>
        )
    }
}
