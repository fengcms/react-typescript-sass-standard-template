import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import About from './About'

const App: FC = () => {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </>
  )
}

export default App
