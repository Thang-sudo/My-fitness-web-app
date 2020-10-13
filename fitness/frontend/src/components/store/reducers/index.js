import {combineReducers} from 'redux';
import authReducers from './authReducers';
import foodReducer from './foodReducer';

export default combineReducers({
    food: foodReducer,
    auth: authReducers,
    
})