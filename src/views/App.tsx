import React, { FC } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Mobile from './mobile'
import Web from './web'

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/m/'>
          <Mobile />
        </Route>
        <Web />
      </Switch>
    </Router>
  )
}

export default App
