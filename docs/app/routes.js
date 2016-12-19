import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from './Components/Root'
import Layout from './Components/Layout'
import Introduction from './Views/Introduction'
import Usage from './Views/Usage'
import Layouts from './Views/Layouts'
import LoginForm from './layouts/LoginForm'
import PageNotFound from './Views/PageNotFound'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='introduction' />

    <Route path='introduction' component={Introduction} />
    <Route path='usage' component={Usage} />
    <Route path='layouts' component={Layouts} />
    <Route path='layouts/login' component={LoginForm} />
    <Route path=':type/:name' component={Root} />
    <Route path='*' component={PageNotFound} />
  </Route>
)

export default routes
