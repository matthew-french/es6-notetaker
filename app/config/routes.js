import React from 'react';
import Main from '../components/main';
import Home from '../components/home';
import Profile from '../components/profile';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" components={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute components={Home} />
  </Route>
);
