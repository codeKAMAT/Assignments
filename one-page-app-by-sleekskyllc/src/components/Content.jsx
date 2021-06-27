import React, { useContext } from 'react'
import TimeContext from '../TimeContext'

const Content = () => {
  const { times } = useContext(TimeContext)

  return (
    <div className='page-content'>
      {times.map((elem, ind) => {
        return (
          <div key={ind}>
            <p>You clicked at {elem}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Content
