import React, { Component } from 'react';
import loginIcon from '../assets/loginIcon.png';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import {Link} from 'react-router-dom';
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
    onChange = (e) =>{
        this.setState({
            username: e.target.value,
            password: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.login(this.state.username, this.state.password)
        this.setState({
            username: '',
            password:''
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
        return (
            <div>
                <Navbar/>
                <div className="text-center container-sm" style={formStyle}>
                    <br/>
                    <div className="form-signin " style={{backgroundColor:'#f5f5f5', padding:'5%'}}>
                        <br/>
                        <img src={loginIcon} style={picStyle}/>
                        <br/>
                        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <br/>
                        <input type="text" class="form-control" placeholder="Username" value={this.state.username} onChange = {() => this.onChange()} required autofocus></input>
                        <br/>
                        <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange = {() => this.onChange()} required></input>
                        <br/>
                        <Link to='/dashboard'>
                            <button class="btn btn-lg btn-primary btn-block" type="submit" onSubmit = {() => this.onSubmit()}>Log in</button>
                        </Link>
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
        login:  (username, password) => dispatch(login(username, password))
    }
}
export default connect()(Login)
