import React, { FC, useState } from 'react'

import useInterval from '@/hooks/useInterval'

const Components: FC = () => {
  const [count, setCount] = useState(0)
  useInterval(() => {
    // Your custom logic here
    setCount(count >= 18 ? 0 : count + 1)
  }, 1000)

  return (
    <>{count}</>
  )
}

export default Components

export const auto = {
  name: 'WebHomeCount',
  Components
}
