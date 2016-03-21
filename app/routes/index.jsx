import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { withAuth, logout, forwardHomeIfLoggedIn } from './helpers'
import Root from 'root'

const routes = (
  <Route component={Root}>
    <Route path="login" onEnter={forwardHomeIfLoggedIn} comp="account/components/login"/>
    <Route path="logout" onEnter={logout} />
    <Route path="/" requireAuth comp="home/components/index">
      <IndexRoute comp="home/components/dashboard/index"/>
      <Route path="403" comp="shared/error/components/403"/>
      <Route path="*" comp="shared/error/components/404"/>
    </Route>
  </Route>
)

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory} routes={withAuth(routes)} />
    )
  }
}
