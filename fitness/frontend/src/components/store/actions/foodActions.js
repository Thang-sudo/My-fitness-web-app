import {ADD_FOOD, SEARCH_FOOD, DELETE_FOOD} from './types';
import axios from 'axios';
import $ from 'jquery'
import { element } from 'prop-types';

export const addFood = (food, amount) =>{
    return{
        type: ADD_FOOD
    }
}

export const searchFood = (food, amount) =>{
    axios.get('http://localhost:8000/api/nutrition/')
    .then(res => {
        console.log(res.data)
        let i;
        for(i of res.data){
            if(i.foodName === food){
                console.log(food)
                console.log(amount)
                addFood(food, amount)
            }
        }
    })
    .catch(err => console.log(err))
    return{
        type: SEARCH_FOOD
    }
}

export const deleteFood = () =>{
    return{
        type: DELETE_FOOD
    }
}