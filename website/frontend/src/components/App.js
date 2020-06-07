import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../store';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Dashboard from './resume/Dashboard';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                    <hr />
                    <Footer />
                </Fragment>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
