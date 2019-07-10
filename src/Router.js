import React from 'react'
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import {
  WelcomePage,
  LoginPage,
  UserManagementPage,
  ApplicationPage,
  CreateUserPage,
  EditUserPage,
  CustomerManagementPage,
  CreateCustomerPage,
  EditCustomerPage
} from './containers'
import AuthRoute from './hoc/AuthRoute'
import {
  WELCOME,
  LOGIN,
  USER_MANAGEMENT,
  CUSTOMER_MANAGEMENT,
  APPLICATION,
  CREATE_USER,
  EDIT_USER,
  CREATE_CUSTOMER,
  EDIT_CUSTOMER
} from './constants/routes'
import history from './history'

export default () =>
  <Router
    history={history}>
    <Route
      path={`/${LOGIN}`}
      component={LoginPage}/>
    <Route
      path={`/${LOGIN}`}
      component={LoginPage}/>
  </Router>