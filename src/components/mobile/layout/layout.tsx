import React, { FC } from 'react'
import classnames from 'classnames'

interface Props {
  className?: string
  children?: React.ReactElement | React.ReactElement[]
}

const MobileLayout: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={classnames('mobile-layout', className)}>
      {children}
    </div>
  )
}

export default MobileLayout
