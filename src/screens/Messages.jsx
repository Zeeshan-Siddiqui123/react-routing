import React from 'react'
import Cards from '../components/cards'
const Messages = () => {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", gap: "1rem" }}>
      <Cards image="../src/assets/react.svg" />
      <Cards image="../src/assets/react.svg" />
      <Cards image="../src/assets/react.svg" />
      <Cards image="../src/assets/react.svg" />
    </div>
  )
}

export default Messages
