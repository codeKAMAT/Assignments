import React, { useContext } from 'react'
import TimeContext from '../TimeContext'

const Footer = () => {
  const { times } = useContext(TimeContext)
  return (
    <div className='page-footer'>
      <h1>You clicked {times.length} times</h1>
    </div>
  )
}

export default Footer
