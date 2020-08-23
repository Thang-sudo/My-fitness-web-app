import React, { Component } from 'react';
import registerIcon from '../assets/registerIcon.png';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from './store/actions/authActions';

class Register extends Component {
    state = {
        username:'',
        password1:'',
        password2:'',
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.register(this.state.username, this.state.password1, this.state.password2)
        this.setState({
            username: '',
            password1: '',
            password2: '',
        })
    }
    render() {
        const formStyle= {
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
                <div className="form-signin" style={{backgroundColor:'#f5f5f5', padding:'5%'}}>
                    <br/>
                    <img src={registerIcon} style={picStyle}/>
                    <br/>
                    <h1 class="h3 mb-3 font-weight-normal">Create new User</h1>
                    <br/>
                    <input type="text" class="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange} required autofocus></input>
                    <br/>
                    <input type="password" class="form-control" placeholder="Password1" name="password1" value={this.state.password1} onChange={this.onChange} required></input>
                    <br/>
                    <input type="password" class="form-control" placeholder="Password2" name="password2" value={this.state.password2} onChange={this.onChange} required></input>
                    <br/>
                        <button class="btn btn-lg btn-primary btn-block" onClick={this.onSubmit} type="submit">Sign up</button>
                    <br/>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        register:(username, password1, password2) => dispatch(register(username, password1, password2))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
