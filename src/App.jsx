import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Getinvolved from './components/GetInvolved'
import Aboutus from './components/Aboutus'

const App = () => {
  return (
    <div className='min-h-screen w-full flex justify-start flex-col items-center font-inria px-2 overflow-x-hidden'>
      <Header/>
      <Home/>
      <Getinvolved/>
      <Aboutus></Aboutus>
    </div>
  )
}

export default App