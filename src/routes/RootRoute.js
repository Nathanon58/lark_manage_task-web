import Router, { Route } from 'preact-router'
import NotfoundScene from '../screens/NotfoundScene'
import { RouteComponent } from '../resources/routeName'
import { menu } from '../resources/static'
import { Layout } from 'antd'

const { Content } = Layout;

const RootRoute = () => {
  return (
    <Layout>
      <Content
        style={{
          backgroundColor: '#f3f9fd',
        }}
      >
        <Router >
          {menu.map((e) => {
            return <Route
              component={RouteComponent(e.pathName)}
              path={e.pathName}
            />
          })}
          <Route path='*' default component={NotfoundScene} />
        </Router>
      </Content>
    </Layout>
  )
}
export default RootRoute