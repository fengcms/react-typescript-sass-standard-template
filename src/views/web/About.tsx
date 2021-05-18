import React, { FC } from 'react'
import C from '@/components'

import { Flex } from '@/components/mobile/layout/Flex'

const About: FC = () => {
  return (
    <div className="App">
      this is about page
      <Flex>
        <C.WebHomeCount />
      </Flex>
    </div>
  )
}

export default About
