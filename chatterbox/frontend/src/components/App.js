import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import Header from './layout/Header';
import Overview from './overview/Overview';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Overview />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))