import { useState } from 'react'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Design from './Components/Design'
import Experience from './Components/Experience'
import LatestService from './Components/LatestService'
import Education from './Components/Education'
import Box from './Components/Box'
import Transform from './Components/Transform'

import MySkill from './Components/MySkill'
import MyPrice from './Components/MyPrice'
import Testimonial from './Components/Testimonial'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import End from './Components/End'

function App() {
  

  return (
    <>
     <NavBar/>
       <Banner/> 
       <Design/>
       <Experience/>
       <LatestService/>
       
       <Education/>
       <Box/>
       <Transform/>
       <MySkill/>
       <MyPrice/>
       <Testimonial/>
       <Blog/>
       <Footer/>
       <End/>
    </>
  )
}

export default App
