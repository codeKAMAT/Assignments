import React, { useState, useContext } from 'react'
import './App.css'
import { useTimes } from './TimeHooks'
import TimeContext from './TimeContext'
import Logo from './components/Logo'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const times = useTimes(useState(useContext(TimeContext)))
  return (
    <>
      <TimeContext.Provider value={times}>
        <div className='main'>
          <div className='leftside'>
            <Logo />
            <SideBar />
          </div>
          <div className='rightside'>
            <Header />
            <Content />
            <Footer />
          </div>
        </div>
      </TimeContext.Provider>
    </>
  )
}

export default App
