import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from './types';
import axios from 'axios';
import { type } from 'jquery';

export const loginStart = () =>{
    return{
        type: LOGIN_START
    }
}

export const loginSuccess = () =>{
    return{
        type: LOGIN_SUCCESS,
    }
}

export const loginFail = error =>{
    return{
        type: LOGIN_FAIL,
        error: error
    }
}

export const registerSuccess = () =>{
    return{
        type: REGISTER_SUCCESS
    }
}

export const registerFail = error =>{
    return{
        type: REGISTER_FAIL,
        error: error
    }
}


export const login = (username, password) =>{
    return dispatch => {
        dispatch(loginStart());
        axios({
            method:'POST',
            url:"login",
            data:{
                'body': JSON.stringify({ username: username, password: password })
            }
        })
        .then(res => {
            console.log(res)
            if(res.data === "True"){
                dispatch(loginSuccess())
            }
            else{
                dispatch(loginFail())
            }
        })
        .catch(error =>{
            console.log(error)
            dispatch(loginFail(error))
        })
    }
}

export const register = (username, password1, password2) =>{
    return dispatch => {
        dispatch(loginStart());
        axios({
            method:'POST',
            url:'register',
            data:{
                'body': JSON.stringify({username: username, password1: password1, password2: password2})
            }
        })
        .then(res => {
            console.log(res)
            if(res.data === "True"){
                dispatch(registerSuccess())
            }
            else{
                dispatch(registerFail())
            } 
        })
        .catch(error => 
            dispatch(registerFail(error)))
    }
}
export const logoutSucess = () =>{
    return{
        type: LOGOUT
    }
}
export const logout = () =>{
    return dispatch =>{
        axios({
            method:'POST',
            url:'logout',
        })
        .then(res =>{
            if(res.data === "True"){
                console.log("Log out Successful")
                dispatch(logoutSucess())
            }
        })
        .catch(error =>
            dispatch(loginFail(error))
        )
    }
}