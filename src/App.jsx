import { useState } from 'react'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Design from './Components/Design'
import Experience from './Components/Experience'
import LatestService from './Components/LatestService'
import Education from './Components/Education'
import Box from './Components/Box'
import Transform from './Components/Transform'
import DesignSkill from './Components/DesginSkill'
function App() {
  

  return (
    <>
     <NavBar/>
       <Banner/> 
       <Design/>
       <Experience/>
       <LatestService/>
       <DesignSkill/>
       <Education/>
       <Box/>
       <Transform/>
    </>
  )
}

export default App
