import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL} from '../actions/types';
import {updatedObject} from '../utility';
import { loginSuccess } from '../actions/authActions';

const initialState = {
    token: null,
    error: null,
    loading: false
}

const loginStart = (state, action) =>{
    return updatedObject(state, {
        error: null,
        loading: true
    })
}

const loginSucces = (state, action) =>{
    return updatedObject(state, {
        token: action.token,
        error: null,
        loading: false
    })
}

const loginFail = (state, action) =>{
    return updatedObject(state,{
        error: action.error,
        loading: false
    })
}

const logout = (state, action) =>{
    return updatedObject(state, {
        token: null
    })
}

const authReducers = (state=initialState, action) =>{
    switch(action.type){
        case LOGIN_START:
            return loginStart(state, action)
        case LOGIN_SUCCESS:
            return loginSuccess(state, action)
        case LOGIN_FAIL:
            return loginFail(state, action)
        case LOGOUT:
            return logout(state, action)
        default:
            return state
    }
}

export default authReducers;