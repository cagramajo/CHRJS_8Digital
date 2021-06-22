/* import React, { Component } from 'react';
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

export default NavBar; */

import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

export default function NavBar() {
  return (
    <div className = "NavBar">
      <div className="ui clearing segment">
        <h2 className="ui right floated header">Mi e-commerce</h2>
        <h2 className="ui left floated header">
            <CartWidget />
        </h2>
      </div>
    </div>
  );
}
