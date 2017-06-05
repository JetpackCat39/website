import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

var name = "evan thurston";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header name={name}/>
                <p className="App-intro">
                    hi im evan
                </p>
            </div>
        );
    }
}

export default App;
