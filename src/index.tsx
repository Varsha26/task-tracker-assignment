import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'antd/dist/antd.css';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Protected from './pages/Protected';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dashboard">
        <Protected cmp={Dashboard} />
      </Route>
      {/* <Route path="/dashboard" component={Dashboard} /> */}
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
)
