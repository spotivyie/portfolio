import React from "react"

import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero"
import About from "./assets/components/About"
import Technologies from "./assets/components/Technologies"
import Experience from "./assets/components/Experience"
import Projects from "./assets/components/Projects"
import Contact from "./assets/components/Contact"
import Footer from "./assets/components/Footer"

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden antialiased">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen">
          </div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar/>
          <Hero/>
          <About/>
          <Technologies/>
          {/* <Experience/> */}
          <Projects/>
          <Contact/>
          {/* <Footer/> */}
        </div>
      </div>
    </>
  )
}

export default App
