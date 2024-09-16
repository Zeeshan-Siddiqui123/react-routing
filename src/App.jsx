import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from './routes'
import Header from './components/Header'
import Footer from './components/footer'
import Messages from './screens/Messages'
import Index from './screens/Index'
import Task from './screens/Task'




export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Index/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> */}
        {routes.map(({ path, screen }, index) => (
          <Route key={index} path={path} element={screen} />
        ))}
        <Route path="*" element={"Page Not Found"} />
        <Route path='/' element={<Index/>}>
          <Route path='messages' element={<Messages/>}/>
          <Route path='task' element={<Task/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
