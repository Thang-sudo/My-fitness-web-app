import React, { Component } from 'react';
import ReactDom from 'react-dom';
import InAppNavBar from './layout/InAppNavBar';
import Footer from './layout/Footer';
import connect from 'react-redux';
import Progress from './layout/Progress';
import CaloriesTable from './layout/CaloriesTable';
class Dashboard extends Component{
    render(){
        return (
            <div className="bg-light" style={{minHeight:'100vh'}}>
                <InAppNavBar/>
                <div className="container">
                    <Progress/>
                    <CaloriesTable/>
                </div>
            </div>
            )
    }
}


export default Dashboard;