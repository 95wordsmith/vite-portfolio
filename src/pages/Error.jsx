import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='grid justify-center   py-[200px] text-white'>
      <h1 className='font-bold text-6xl p-4 m-auto'>404</h1>
      <h1 className='font-bold  text-6xl'>Page Not Found!!</h1>
      <p className='m-auto text-[25px] p-4'>Back to    
      <Link className='underline font-bold text-red-700' to="/"> Home Page</Link>
      </p>
    </div>
  )
}

export default Error