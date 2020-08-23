import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from '../actions/types';
import { loginSuccess } from '../actions/authActions';

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false
}


const authReducers = (state=initialState, action) =>{
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
                loading: true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                error: null,
                loading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                error: action.error,
                loading:false
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
                loading: false
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                error: null,
                loading: false
            }
        case REGISTER_FAIL:
            return{
                ...state,
                isAuthenticated: false,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

export default authReducers;