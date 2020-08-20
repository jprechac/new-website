import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";

import { Provider } from 'react-redux';
import store from '../store';

import Footer from './layout/Footer';
import Nav from './layout/Nav';

import About from './sections/About';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Nav />
                    <div className="container-fluid p-0">
                        <About />
                    </div>
                    <Footer />
                </Fragment>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
