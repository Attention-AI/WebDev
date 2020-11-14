import axios from 'axios';
import {

    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    
} from './types';

//check token to load user
export const loaduser = () => (dispatch,getstate) => {
    //User Loading
    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user')
}