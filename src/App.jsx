import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from 'react-hot-toast';



const App = () => {
  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App