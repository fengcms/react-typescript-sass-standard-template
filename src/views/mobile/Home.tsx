import React, { FC } from 'react'
import { isTest } from '@/utils/tools'
const Home: FC = () => {
  isTest()
  return (
    <div className="App">
      this is mobile home page
    </div>
  )
}

export default Home
