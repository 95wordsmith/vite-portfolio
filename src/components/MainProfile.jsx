import React from 'react'
import Software from './Software'
import Project from './Project'

function MainProfile() {
  return (
    <div className='flex flex-wrap  justify-center mt-16 mb-16  gap-20 '>
    <Software/>
    <Project /> 
    </div> 
  )
}

export default MainProfile