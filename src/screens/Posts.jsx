import React from 'react'
import Cards from '../components/cards'

const Posts = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", gap: "1rem" }}>
        <Cards image="../public/vite.svg"/>
        <Cards image="../src/assets/react.svg"/>
        <Cards image="../public/vite.svg"/>
        <Cards image="../src/assets/react.svg"/>
        <Cards image="../public/vite.svg"/>
        <Cards image="../src/assets/react.svg"/>
        <Cards image="../public/vite.svg"/>
        <Cards image="../src/assets/react.svg"/>
        <Cards image="../public/vite.svg"/>
        <Cards image="../src/assets/react.svg"/> 
        <Cards image="../public/vite.svg"/> 
        <Cards image="../src/assets/react.svg"/> 
      </div>
    </div>
  )
}

export default Posts
