import React, { Component } from 'react';
import {Header, Segment} from 'semantic-ui-react'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Segment clearing>
                    <Header as='h2' floated='right'>
                        Aqui va mi Menu
                    </Header>
                    <Header as='h2' floated='left'>
                        Aquí va mi CartWidget
                    </Header>
                </Segment> 
            </div>
        )
    }
}

export default NavBar;