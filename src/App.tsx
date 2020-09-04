import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/root.scss'


import Header from './components/Header';
import Home from './components/Home';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';


class App extends Component {
    render() {
        return (
            <div className="mycontainer">
                <BrowserRouter>
                    <Header />
                    <Route path="/home" exact component={Home} />
                    <Route path="/home1" exact component={Home1} />
                    <Route path="/home2" exact component={Home2} />
                    <Route path="/home3" exact component={Home3} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;