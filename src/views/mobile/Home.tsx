import React, { FC } from 'react'
import { isTest } from '@/utils/tools'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  isTest()
  return (
    <div className="App">
      this is mobile home page
      <Link to={'/m/about'}>about</Link>
    </div>
  )
}

export default Home
