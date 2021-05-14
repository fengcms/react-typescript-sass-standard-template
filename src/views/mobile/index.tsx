import React, { FC } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import C from '@/components'

import Home from './Home'
import About from './About'

const App: FC = () => {
  const { path } = useRouteMatch()
  return (
    <C.MobileLayout>
      <Switch>
        <Route path={`${path}/`}>
          <Home />
        </Route>
        <Route path={`${path}/about`}>
          <About />
        </Route>
      </Switch>
    </C.MobileLayout>
  )
}

export default App
