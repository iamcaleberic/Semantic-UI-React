import React from 'react'
import { Route, IndexRedirect } from 'react-router'

// doc site views
import Root from './Components/Root'
import DocsLayout from './Components/DocsLayout'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import Root from './Components/Root'
import Layout from './Components/Layout'
import ExternalExampleLayout from './Components/ExternalExampleLayout'
import Introduction from './Views/Introduction'
import Usage from './Views/Usage'
import Layouts from './Views/Layouts'
import PageNotFound from './Views/PageNotFound'

// example layouts
import LayoutsLayout from './Layouts/LayoutsLayout'
import LoginLayout from './Layouts/LoginLayout'
import ThemingLayout from './Layouts/ThemingLayout'
import ResponsiveLayout from './Layouts/ResponsiveLayout'
import GridLayout from './Layouts/GridLayout'
import AttachedContentLayout from './Layouts/AttachedContentLayout'
import BootstrapMigrationLayout from './Layouts/BootstrapMigrationLayout'
import HomepageLayout from './Layouts/HomepageLayout'
import StickyLayout from './Layouts/StickyLayout'
import FixedMenuLayout from './Layouts/FixedMenuLayout'

const routes = (
  <Route path='/'>
    <IndexRedirect to='introduction' />

    {/* full page routes */}
    <Route component={LayoutsLayout}>
      <Route path='layouts/login' component={LoginLayout} />
      <Route path='/layouts/theming' component={ThemingLayout} />
      <Route path='/layouts/responsive' component={ResponsiveLayout} />
      <Route path='/layouts/grid' component={GridLayout} />
      <Route path='/layouts/attached-content' component={AttachedContentLayout} />
      <Route path='/layouts/bootstrap-migration' component={BootstrapMigrationLayout} />
      <Route path='/layouts/homepage' component={HomepageLayout} />
      <Route path='/layouts/sticky' component={StickyLayout} />
      <Route path='/layouts/fixed-menu' component={FixedMenuLayout} />
    </Route>

    {/* Docs layout with sidebar */}
    <Route component={DocsLayout}>
      <Route path='introduction' component={Introduction} />
      <Route path='usage' component={Usage} />
      <Route path='layouts' component={Layouts} />
      <Route path=':type/:name' component={Root} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </Route>

const RedirectToIntro = () => <Redirect to='introduction' />

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/maximize/:kebabCaseName' component={ExternalExampleLayout} />
      <Layout>
        <Switch>
          <Route exact path='/' render={RedirectToIntro} />
          <Route exact path='/introduction' component={Introduction} />
          <Route exact path='/usage' component={Usage} />
          <Route exact path='/:type/:name' component={Root} />
          <Route exact path='/*' component={PageNotFound} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default Router
