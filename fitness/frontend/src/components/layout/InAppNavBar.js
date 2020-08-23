import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../store/actions/authActions';
import { connect } from 'react-redux';

class InAppNavBar extends Component {
    onSubmit = (e) =>{
        this.props.logout()
    }
    render (){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                      <Link class="navbar-brand" to="/dashboard">Fitness</Link>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                          <li class="nav-item active">
                              <Link className="nav-link" to="#">Daily Goal</Link>
                          </li>
                          <li class="nav-item">
                              <Link className="nav-link" to='#'>Newsfeed</Link>
                          </li>
                          <li class="nav-item">
                              <Link className="nav-link" to='#'>Profile</Link>
                          </li>
                          </ul>
                      </div>
                      <Link to="/">
                        <button class="btn btn-outline-danger my-2 my-sm-0" style={{float:"right"}} onClick={this.onSubmit} type="submit"  >Log out</button>
                      </Link>
                      
                </nav>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(null, mapDispatchToProps)(InAppNavBar);
