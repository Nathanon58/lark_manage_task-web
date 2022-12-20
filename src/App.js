import { Route, route, Router } from 'preact-router'
import RootRoute from './routes/RootRoute'
import AuthenticatedRoute from './routes/AuthenticatedRoute'
import NotfoundScene from './screens/NotfoundScene'
import AccountRoute from './routes/AccountRoute'
import UserMobx from './mobx/UserMobx'


const App = () => {
  function handleRouter(e) {
    const allowed = UserMobx.onCheckLogin
    if (!allowed) {
      if (e.url.indexOf('/account/') >= 0) {
        return route(e.url)
      }
      return route('/account/login')
    }
    if (e.url.indexOf('/account/') >= 0) return route('/manage-caseList')
    return route(['/'].includes(e.url) ? '/manage-caseList' : e.url)
  }

  return (
    <div>
      <Router onChange={e => handleRouter(e)}>
        <AccountRoute path='/account/:rest*' />
        <AuthenticatedRoute
          path='/:rest*'
          login='/account/login'
          route={RootRoute}
        />
        <Route path='*' default component={NotfoundScene} />
      </Router>
    </div>
  )
}

export default App
