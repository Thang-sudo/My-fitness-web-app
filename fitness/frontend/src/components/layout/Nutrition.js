import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchFood} from '../store/actions/foodActions';
import { compose } from 'redux';

class Nutrition extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        foodInput: '',
        amountInput: '',
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    onClick = (e) =>{
        e.preventDefault()
        this.props.searchFood(this.state.foodInput, this.state.amountInput)
        this.setState({foodInput:'', amountInput: ''})
    }
    render() {
        // console.log(this.props.foods)
        let foods = this.props.foods
        console.log(foods)
        const UserFoods = this.props.foods.map(food => (
            <tr>
                <td>{food.foodName}</td>
                <td>{food.amount}</td>
                <td>{food.caloriesCount}</td>
            </tr>
        ))
        return (
        <div style={{textAlign:"center"}}>
            <div className="my-3 bg-white rounded shadow-sm" style={{textAlign:"center"}}>
                <div className="bg-primary" style={{height:"50px", textAlign:"center", color:"white"}}>
                    <h4 style={{paddingTop:"5px"}}>Nutrition</h4>
                </div>
                <table class="table table-hover p-3">
                    <thead>
                        <tr>
                        <th scope="col">Nutrition</th>
                        <th scope="col">Amount(g)</th>
                        <th scope="col">Kcal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserFoods}
                    </tbody>
                    </table>     
            </div>
                <div className="btn btn-outline-primary" data-toggle="modal" data-target="#nutritionModal" style={{width:"100%", height:"50px", borderRadius:"10px", textAlign:"center"}}>
                    <h6 style={{color:"bg-primary", paddingTop: "10px"}} >Add New</h6>
                </div>
                <div className="modal fade" id="nutritionModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title">Nutrition</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label style={{marginRight:"10px"}}>Food:</label>
                                <input type="text" name="foodInput" placeholder="Nutrition..." value={this.state.foodInput} onChange={this.onChange} style={{border:"none", borderBottom: "1px black solid", outline:"none"}}/>
                                <br/>
                                <br/>
                                <label style={{marginRight:"10px"}}>Amount:</label>
                                <input type="text" name="amountInput" placeholder="Amount(g)..." value={this.state.amountInput} onChange={this.onChange} style={{border:"none", borderBottom:"1px black solid", outline:"none"}}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.onClick}>Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                
        </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        foods: state.food.foods,
    }
}
    
const mapDispatchToProps = dispatch =>{
    return{
        searchFood: (food, amount) => dispatch(searchFood(food, amount))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);
