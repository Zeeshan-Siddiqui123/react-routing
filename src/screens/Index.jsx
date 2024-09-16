import React from 'react'
import './screen.css'
import { Link, Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <div className='text-3xl font-bold underline'>Home</div>
      <Link to='messages'>Messages</Link>
      <Link to='task'>Task</Link>
      <Outlet/>
      
    </div>
  )
}

export default Index
