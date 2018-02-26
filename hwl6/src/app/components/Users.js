import React from 'react';
import UsersList from './UsersList';
import UsersStore from '../stores/usersStore';
import { addUser, fetchUsers } from '../actions/usersActions';

export default class Users extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            users: []
        };

        this.newUser = this.newUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    newUser()
    {
        let userName = 'Юрий';
        let userEmail = 'ura@mail.ru';
        let userPhone = '+7 862-308-00-56';
        let userWebsite = 'www.ura.com';

        addUser({userName, userEmail, userPhone, userWebsite});
    }

    onUserChange(users)
    {
        this.setState({
            users: users
        });
    }

    componentWillMount(){
        UsersStore.on('change', this.onUserChange);
    }

    componentDidMount()
    {
        fetchUsers();
    }

    componentWillUnmount(){
        UsersStore.removeListener('change', this.onUserChange);
    }

    render()
    {
        return (
            <div>
                <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.newUser}
                >Добавить нового пользователя</button>
                <UsersList users={this.state.users} />
            </div>
        );
    }
}
