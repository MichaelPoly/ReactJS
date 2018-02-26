import { EventEmitter } from 'events';

import {
    ADD_USER,
    FETCH_USERS_START,
    FETCH_USERS_END
} from "../constants/userConstants";

import dispatcher from '../dispatcher';
import axios from 'axios';

class UsersStore extends EventEmitter
{
    constructor()
    {
        super(...arguments);

        this.users = [];

        this.fetchUserStart = this.fetchUserStart.bind(this);
        this.fetchUsersEnd = this.fetchUsersEnd.bind(this);
        this.change = this.change.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchUserStart()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let { data } = response;

                dispatcher.dispatch({
                    type: FETCH_USERS_END,
                    payload: data
                });
            });
    }

    fetchUsersEnd(users)
    {
        this.users = users;
        this.change();
    }

    change(){
        this.emit('change', this.users);
    }

    addUser(user)
    {
        this.users.push(user);
        this.change();
        console.log(this.users);
    }

    handleActions(action)
    {
        switch (action.type)
        {
            case ADD_USER: {
                this.addUser(action.payload);
                break;
            }
            case FETCH_USERS_START: {
                this.fetchUserStart();
                break;
            }
            case FETCH_USERS_END: {
                this.fetchUsersEnd(action.payload);
                break;
            }
        }
    }
}

const uS = new UsersStore();
dispatcher.register(uS.handleActions);
export default uS;
