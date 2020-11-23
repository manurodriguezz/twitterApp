import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ROUTES } from 'Data/constants';
import Layout from 'Components/Layout';
import Home from 'Containers/Home';
import NotFound from 'Containers/NotFound';

import 'antd/dist/antd.css';
import './index.scss';
import ShowTweets from 'Containers/ShowTweets';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.showTweets} component={ShowTweets} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
