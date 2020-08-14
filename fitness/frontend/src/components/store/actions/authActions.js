import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL} from './types';
import axios from 'axios';

export const loginStart = () =>{
    return{
        type: LOGIN_START
    }
}

export const loginSuccess = (token) =>{
    return{
        type: LOGIN_SUCESS,
        token: token
    }
}

export const loginFail = error =>{
    return{
        type: LOGIN_FAIL,
        error: error
    }
}

export const registerFail = error =>{
    return{
        type: REGISTER_FAIL,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');
    return{
        type: LOGOUT,
    }
}

export const login = (username, password) =>{
    return dispatch => {
        dispatch(loginStart());
        axios.post('http://127.0.0.1:8000/login/',{
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            dispatch(loginSuccess(token));
        })
        .catch(error => 
            dispatch(loginFail(error)))
    }
}

export const register = (username, password1, password2) =>{
    return dispatch => {
        dispatch(loginStart());
        axios.post('http://127.0.0.1:8000/rest-auth/register/',{
            username: username,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            dispatch(loginSuccess(token));
        })
        .catch(error => 
            dispatch(registerFail(error)))
    }
}

export const authCheckState = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token')
        if(token === undefined){
            dispatch(logout())
        }
        else{
            dispatch(loginSuccess(token))
        }
    }
}