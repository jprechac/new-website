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
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Router>
                            <Switch>
                                <Route path='/resume'>
                                    <Dashboard />
                                </Route>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                    <Footer />
                </Fragment>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
