import React, { Component } from 'react';
import {Header, Segment} from 'semantic-ui-react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <Segment className = 'NavBar' clearing>
                <Header as='h1' floated='left'>
                    Mi e-commerce
                </Header>
                <Header floated='right'>
                    <CartWidget />
                </Header>
            </Segment> 
        )
    }
}

export default NavBar;