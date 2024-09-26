import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
// import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomeContent from './components/HomeContent.jsx'
import HomePage from './components/HomePage.jsx'
import Login from './components/Login.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path='' element={<Home />}></Route> */}
      <Route path='' element={<HomeContent />}></Route>
      <Route path='homepage' element={<HomePage />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='login' element={<Login />}></Route> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
