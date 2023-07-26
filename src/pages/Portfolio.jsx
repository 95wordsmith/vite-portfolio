import React from 'react'
import Pbody from '../components/Pbody'
import workItems from '../data.js'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Pheader from '../components/Pheader'

function Portfolio() {
  return (
    <>
    <Pbody>
     <section className='pt-36 pb-20 '>
      <Pheader/>
      <div className='flex gap-[90px] flex-wrap justify-center '>
        {workItems.map((work)=>{
          return (
          <Card  className= 'flex-2 w-[700px] h-[500px] order-2 port-animation' key = {work.id}>
            <div style={{backgroundImage: `url(${work.image})`}} className='w-full h-full bg-no-repeat bg-cover bg-origin-border bg-center rounded-xl flex flex-col '>
              <h1 className='text-center text-pink-600 drop-shadow-lg  contrast-100 sepia text-6xl font-bold pt-[140px]'>{work.title}</h1>
              <button className='button clamped w-[24%]  mt-[200px] place-self-center text-red-700'>
              <Link  to={`/portfolio/${work.id}`}>More Info</Link>
              </button>
            </div>
          </Card>
        
          )
        })}
      </div>
     </section>

    </Pbody>
    
    </>
  )
}

export default Portfolio