import React from 'react';
import {Link} from 'react-router';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Login from '../components/Login';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

export default class Layout extends React.Component {

    constructor() {
        super(...arguments);
        this.brand = 'ReactJS Blog';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <div>
                <Header>Блог на React JS</Header>
                <Menu>
                    <MenuItem href="/" active={this.isActive('/')}>Главная</MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>Пользователи</MenuItem>
                    <MenuItem href="/blogs" active={this.isActive('/blogs')}>Блоги</MenuItem>
                    <Login href="/login" active={this.isActive('/login')}>Вход</Login>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer>&copy; 2018</Footer>
            </div>
        );
    }
}
