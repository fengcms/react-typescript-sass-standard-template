import React, { FC } from 'react'
import classnames from 'classnames'

interface Props {
  className?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Components: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={classnames('mobile-layout', className)}>
      {children}
    </div>
  )
}

export default Components

export const auto = {
  name: 'MobileLayout',
  Components
}
