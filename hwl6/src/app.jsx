import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import PageNotFound from './app/pages/PageNotFound';
import Main from './app/pages/Main';
import Users from './app/components/Users';
import Blogs from './app/pages/Blogs';
import LoginBlock from './app/pages/LoginBlock';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="users" component={Users}/>
            <Route path="blogs" component={Blogs}/>
            <Route path="login" component={LoginBlock}/>
            <Route path="*" component={PageNotFound}/>
            // <Route path="Template/dist" component={Main}/>
        </Route>
    </Router>,
    app);
