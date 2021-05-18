import React, { FC } from 'react'
import classnames from 'classnames'

interface Props {
  className?: string
  children?: React.ReactElement | React.ReactElement[]
}

export const Flex: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={classnames('flex', className)}>
      {children}
    </div>
  )
}

export const ColumnFlex: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={classnames('flex flex-column', className)}>
      {children}
    </div>
  )
}

export default Flex

export const autos = [
  {
    name: 'Flex',
    Components: Flex
  },
  {
    name: 'ColumnFlex',
    Components: ColumnFlex
  }
]
