import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ROUTES } from 'Data/constants';
import Layout from 'Components/Layout';
import UserPosts from 'Containers/UserPosts';
import NotFound from 'Containers/NotFound';

import 'antd/dist/antd.css';
import './index.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={ROUTES.userPosts} component={UserPosts} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
