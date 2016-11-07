import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';
import SearchPage from './components/SearchPage';
import FilterPage from './components/FilterPage';
import DetailPage from './components/DetailPage';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={SearchPage} />
        <Route path="filter" component={FilterPage} />
        <Route path="detailView" component={DetailPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
