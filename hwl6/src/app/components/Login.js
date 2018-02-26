import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component
{
    render()
    {
        return (
          <li className={this.props.active ? 'active' : 'enterBtn'}>
            <Link to={this.props.href}>
                {this.props.children}
            </Link>
          </li>
        );
    }
}
