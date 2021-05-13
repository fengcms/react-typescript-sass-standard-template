import React, { FC } from 'react'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from '@/views/Home'
import About from '@/views/About'
const App: FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Router>
  )
}

export default App
