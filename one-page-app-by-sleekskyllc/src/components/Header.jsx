import React from 'react'

const Header = () => {
  const currtime = new Date().toLocaleTimeString()

  return (
    <>
      <div className='page-header'>
        <h1>Current Time is: {currtime}</h1>
      </div>
    </>
  )
}

export default Header
