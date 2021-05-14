import React, { FC } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import MobileLayout from '@/components/mobile/layout/layout'

import Home from './Home'
import About from './About'

const App: FC = () => {
  const { path } = useRouteMatch()
  return (
    <MobileLayout>
      <Switch>
        <Route path={`${path}/`}>
          <Home />
        </Route>
        <Route path={`${path}/about`}>
          <About />
        </Route>
      </Switch>
    </MobileLayout>
  )
}

export default App
