import React, { Component } from 'react';
import logo from './spinner.svg';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>hi im {this.props.name}</h2>
            </div>
        );
    }
}

export default Header;
