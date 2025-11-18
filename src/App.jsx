import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Getinvolved from './components/GetInvolved'
import KeyFocus from './pages/KeyFocus'

const App = () => {
  return (
    <div className='min-h-screen w-full flex justify-start flex-col items-center font-inria px-2 overflow-x-hidden'>
      {/* Header Page */}
      <Header/>
      {/* Home Page */}
      <Home/>
      {/* Get Involved Page */}
      <Getinvolved/>
      {/* Key focus Page */}
      <KeyFocus />
    </div>
  )
}

export default App