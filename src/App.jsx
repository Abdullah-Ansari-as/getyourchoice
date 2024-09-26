import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
// import HomeContent from "./components/HomeContent"
import { Outlet } from "react-router-dom"
import { MyContextProvider } from "./context/myContext"


function App() {

  return (
    <>
      <MyContextProvider>
        <Navbar/>
        <Outlet />
        <Footer />
      </MyContextProvider>
     </>
  )
}

export default App