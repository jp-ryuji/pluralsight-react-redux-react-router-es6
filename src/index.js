import 'babel-polyfill'; // NOTE: There're some features Babel can't transpile, so babel-polyfill is needed here. But it's around 50KB, so it's a significant amount of code.
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import './styles/styles.css'; // NOTE: Webpack can import css files, too.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
