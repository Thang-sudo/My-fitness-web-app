import {SEARCH_FOOD,ADD_FOOD,DELETE_FOOD} from '../actions/types';

const initialState = {
    foods:[
        { 
          id: 0,
          amount: 100,
          foodName: 'cake',
          caloriesCount: 100,  
        }
    ]
}

const foodReducer = (state=initialState, action) =>{
    switch(action.type){
        case SEARCH_FOOD:
            let newState = {...state}
            newState.foods.push(action.payload)
            return newState
        case DELETE_FOOD:
            return state
        default:
            return state
    }
}
export default foodReducer;
