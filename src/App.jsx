import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components'

function App() {

  return (
    <div className='w-[450px] h-[560px] mx-auto  rounded-2xl overflow-hidden shadow-2xl shadow-black mt-20 relative'>
      <div className='h-full '>
      <Outlet />
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
      <Footer />
      </div>
    </div>
  )
}

export default App
