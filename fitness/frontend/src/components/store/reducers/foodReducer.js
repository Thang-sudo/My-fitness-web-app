import {SEARCH_FOOD,ADD_FOOD,DELETE_FOOD} from '../actions/types';

const initialState = {
    foods:[
        { id:0,
          foodName: '',
          caloriesCount: '',  
        }
    ]
}

const foodReducer = (state=initialState, action) =>{
    switch(action.type){
        case SEARCH_FOOD:
            return state
        case ADD_FOOD:
            return state
        case DELETE_FOOD:
            return state
        default:
            return state
    }
}
