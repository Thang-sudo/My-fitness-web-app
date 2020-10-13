import React, { Component } from 'react';
import loginIcon from '../assets/loginIcon.png';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Dashboard from './Dashboard';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './store/actions/authActions';


class Login extends Component {
    constructor(props){
        super(props)
    }
    state = {
        username:'',
        password:''
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
        this.setState({
            username: '',
            password:''
        })
    }
    render() {
        const formStyle = {
            width: "50%",
            height:"50%",
        }
        const picStyle = {
            borderRadius:"50%",
            width:"100px",
            height:"100px"
        }
        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard"/>
        }
        return (
            <div>
                <Navbar/>
                <div className="text-center container-sm" style={formStyle}>
                    <br/>
                    <div className="form-signin " style={{backgroundColor:'#f5f5f5', padding:'5%'}}>
                        <br/>
                        <img src={loginIcon} style={picStyle}/>
                        <br/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <br/>
                        <input type="text" className="form-control" name="username" placeholder="Username" value={this.state.username} onChange = {this.onChange} required autofocus></input>
                        <br/>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange = {this.onChange} required></input>
                        <br/>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onSubmit}>Log in</button>
                        <br/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        login:(username, password) => dispatch(login(username, password))
    }
}
const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
