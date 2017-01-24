import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from './Components/Root'
import DocsLayout from './Components/DocsLayout'
import Introduction from './Views/Introduction'
import Usage from './Views/Usage'
import Layouts from './Views/Layouts'
import LoginForm from './Layouts/LoginForm'
import PageNotFound from './Views/PageNotFound'

const routes = (
  <Route path='/'>
    <IndexRedirect to='introduction' />

    {/* full page routes */}
    <Route path='layouts/login' component={LoginForm} />

    {/* Docs layout with sidebar */}
    <Route component={DocsLayout}>
      <Route path='introduction' component={Introduction} />
      <Route path='usage' component={Usage} />
      <Route path='layouts' component={Layouts} />
      <Route path=':type/:name' component={Root} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </Route>
)

export default routes
