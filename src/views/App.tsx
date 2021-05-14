import React, { FC } from 'react'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Mobile from './mobile'
import Web from './web'

const App: FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path='/' exact>
        <Web />
      </Route>
      <Route path='/m'>
        <Mobile />
      </Route>
    </Router>
  )
}

export default App
