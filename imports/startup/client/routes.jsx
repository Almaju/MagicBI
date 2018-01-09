import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import React from 'react';

import i18n from 'meteor/universe:i18n';

import Layout from '../../ui/layouts/Layout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Test from '../../ui/pages/Test.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
// import Groups from '../../ui/pages/Groups.jsx';
// import Rides from '../../ui/pages/Rides.jsx';

i18n.setLocale('en');

const renderRoutes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact name="home" path="/" component={Home} />
        <Route exact name="test" path="/test" component={Test} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default renderRoutes;
