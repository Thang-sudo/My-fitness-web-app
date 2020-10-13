import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchFood} from '../store/actions/foodActions';

class FoodSearch extends Component {
    constructor(props){
        super(props)
    }
    state = {
        foodInput: '',
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    onClick = (e) =>{
        e.preventDefault()
        this.props.searchFood(this.state.foodInput)
        this.setState({foodInput:''})
    }
    render() {
        return (
            <div className="container-fluid" style={{marginTop:"10px"}}>
                <div className="jumbotron ">
                    <h3>Search for food!</h3>
                    <input class="form-control" type="text" placeholder="Food Search..." name="foodInput" value={this.state.foodInput} onChange={this.onChange} ></input>
                    <hr class="my-4"/>
                    <button class="btn btn-primary btn-lg" onClick={this.onClick} >Search</button>
                    <Link to='/dashboard'>
                        <button className="btn btn-secondary btn-lg" style={{marginLeft:"10px"}}>Back to Dashboard</button>
                    </Link>
                </div>
            </div>
            
                
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        searchFood: (food) => dispatch(searchFood(food))
    }
}
export default connect(null, mapDispatchToProps)(FoodSearch);