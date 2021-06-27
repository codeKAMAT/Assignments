import React, { useContext, useState } from 'react'
import TimeContext from '../TimeContext'

const SideBar = () => {
  const currtime = new Date().toLocaleTimeString()
  const { addTime } = useContext(TimeContext)

  const [time, setTime] = useState(currtime)

  const handleTimeAdd = () => {
    addTime(time)
    setTime(currtime)
  }
  return (
    <div className='sidebar'>
      <button className='sidebar__btn' value={time} onClick={handleTimeAdd}>
        Click me
      </button>
    </div>
  )
}

export default SideBar
