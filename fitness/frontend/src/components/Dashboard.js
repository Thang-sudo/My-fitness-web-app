import React, { Component } from 'react';
import ReactDom from 'react-dom';
import InAppNavBar from './layout/InAppNavBar';
import Footer from './layout/Footer';

class Dashboard extends Component{
    render(){
        return (
            <div>
                <InAppNavBar/>
                <h1>DashBoard</h1>
                <Footer/>
            </div>
            
            )
    }
}

export default Dashboard;