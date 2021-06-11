import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className = 'Header'>
                <h1>Aqui va el nombre de mi e-commerce</h1>
                <NavBar />
            </div>
        )
    }
}

export default Header;
