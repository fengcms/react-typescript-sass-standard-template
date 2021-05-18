import React, { FC, lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Loading from './Loading'
import C from '@/components'

const Home = lazy(async () => await import('./web/Home'))
const About = lazy(async () => await import('./web/About'))

const Mobile = lazy(async () => await import('./mobile'))

const NotFound = lazy(async () => await import('./NotFound'))

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <C.SelectLang />
      <Router>
        <Switch>
          {/* PC端 */}
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* 移动端 */}
          <Route path='/m'>
            <Mobile />
          </Route>
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
