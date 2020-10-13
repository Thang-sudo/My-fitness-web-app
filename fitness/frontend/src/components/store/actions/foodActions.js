import {ADD_FOOD, SEARCH_FOOD, DELETE_FOOD} from './types';
import axios from 'axios';


let nextId = 0

export const addFood = (food, amount, calories) =>{
    return{
        type: ADD_FOOD,
        payload:{
            foodName: food,
            amount: amount,
            caloriesCount: calories
        }
    }
}

export const searchFood = (food, amount) => dispatch =>{
    let addedFood = {
        id: 0,
        foodName: '',
        amount: 0,
        caloriesCount: 0,
    }
    axios.get('http://localhost:8000/api/nutrition/')
    .then(res => {
        let i;
        for(i of res.data){
            if(i.foodName === food){
                let calories = (i.caloriesCount / 100)*amount
                addedFood = {
                    id: nextId++,
                    foodName: i.foodName,
                    amount: amount,
                    caloriesCount: calories
                }
                dispatch({
                    type: SEARCH_FOOD,
                    payload: addedFood
                })
            }
        }
    })
    .catch(err => console.log(err))
    // dispatch({
    //     type: SEARCH_FOOD,
    //     payload: addedFood
    // })
}

export const deleteFood = () =>{
    return{
        type: DELETE_FOOD,
    }
}