/* eslint-disable */
import App from './components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

 

ReactDOM.render((
  <Provider store={store}>
   <Router history={hashHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
