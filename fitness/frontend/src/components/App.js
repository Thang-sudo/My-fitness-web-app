import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Footer from './layout/Footer';
import Dashboard from './Dashboard';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path = '/' component={Home}/>
                            <Route exact path = '/login' component={Login}/>
                            <Route exact path = '/register' component={Register} />
                            <Route exact path = '/dashboard' component={Dashboard}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));