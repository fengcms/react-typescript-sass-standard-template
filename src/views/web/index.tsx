import React, { FC } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/`}>
        <Home />
      </Route>
      <Route path={`${path}/about`}>
        <About />
      </Route>
    </Switch>
  )
}

export default App
