import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from '../store';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Resume from './pages/Resume';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <div className="container">
                    <Router>
                        <Switch>
                            <Route path='/resume'>
                                <Resume />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <Footer />
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
