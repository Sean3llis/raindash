import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/app';
import CityDetail from './containers/city-detail';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/city/:id" component={CityDetail} />
    </Router>
  </Provider>
  , document.getElementById('mount'));
