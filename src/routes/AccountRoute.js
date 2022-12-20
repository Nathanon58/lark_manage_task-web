import { Component } from 'preact'
import Router, { Route } from 'preact-router'
import HandleScene from '../screens/Authen/HandleScene'
import LoginScene from '../screens/Authen/LoginScene'
import RegisterScene from '../screens/Authen/RegisterScene'
import NotfoundScene from '../screens/NotfoundScene'

class AccountRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <LoginScene path='/account/login' />
          <RegisterScene path='/account/register' />
          <HandleScene path='/account/handle' />
          <Route path='*' default component={NotfoundScene} />
        </Router>
      </div>
    )
  }
}

export default AccountRoute
