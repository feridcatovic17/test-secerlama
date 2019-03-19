import axios from 'axios';
import { AsyncStorage } from 'react-native';

import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from './types';

const BASE_URL = 'http://localhost:5001/api/v1';

function loginPending(isPending) {
    return {
        type: LOGIN_PENDING,
        isPending
    }
}

function loginSuccess(isSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isSuccess
    }
}

function loginError(errors) {
    return {
        type: LOGIN_ERROR,
        errors
    }
}

function newCard(card) {
    return {
        type: ADD_CARD,
        card

    }
}

export const loginUser = (email, password) => dispatch => {
    dispatch(loginPending(true));
    return axios.post(BASE_URL + '/auth/login', { email, password })
        .then(res => {
            dispatch(loginPending(false));
            dispatch(loginSuccess(true));
            dispatch(loginError(null));

            AsyncStorage.setItem("access_token", res.data.access_token);
        })
        .catch(errors => {
            console.log(errors)
            dispatch(loginError(true));

        })

}

export function addCard(name, text, listId) {
    return function (dispatch) {
        const obj = {
            name: name,
            text: text,
            listId: listId
        }
        axios.post(BASE_URL + '/card/5c88f2e9f05d944ef2e9d871/card/new', obj)
            .then(res => {
                dispatch(newCard(res.data))
            })
            .catch(e => console.log("eeeeeeee", e))
    }
}