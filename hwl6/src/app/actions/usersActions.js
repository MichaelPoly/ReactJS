import dispatcher from '../dispatcher';
import {ADD_USER, FETCH_USERS_START} from '../constants/userConstants';

export function addUser({userName, userEmail, userPhone, userWebsite}) {
    const user = {userName, userEmail, userPhone, userWebsite};

    dispatcher.dispatch({
        type: ADD_USER,
        payload: user
    });
}

export function fetchUsers() {
    dispatcher.dispatch({
        type: FETCH_USERS_START
    });
}
