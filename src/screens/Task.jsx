import React from 'react'
import Cards from '../components/cards'

const Task = () => {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", gap: "1rem" }}>
      <Cards image="../public/vite.svg"/>
      <Cards image="../public/vite.svg"/>
      <Cards image="../public/vite.svg"/>
      <Cards image="../public/vite.svg"/>
    </div>
  )
}

export default Task
