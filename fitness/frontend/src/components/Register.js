import React, { Component } from 'react';
import registerIcon from '../assets/registerIcon.png';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import {Link} from 'react-router-dom';
class Register extends Component {
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
                <div className="form-signin" style={{backgroundColor:'#f5f5f5', padding:'5%'}}>
                    <br/>
                    <img src={registerIcon} style={picStyle}/>
                    <br/>
                    <h1 class="h3 mb-3 font-weight-normal">Create new User</h1>
                    <br/>
                    <input type="text" class="form-control" placeholder="Username" required autofocus></input>
                    <br/>
                    <input type="password" class="form-control" placeholder="Password1" required></input>
                    <br/>
                    <input type="password" class="form-control" placeholder="Password2" required></input>
                    <br/>
                    <Link to='/dashboard'>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                    </Link>
                    <br/>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Register;
