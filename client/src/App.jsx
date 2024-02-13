import React from 'react'
import './App.css'
import { Box ,VStack , HStack , Flex } from '@chakra-ui/layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import backg from "./assets/backg.webp"
import Home from './components/Home'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Stunt from './components/Stunt'
import StuntList from './components/StuntsList'
import Faq from './components/Faq'
import InsertStunt from './components/InsertStunt'
const App = () => {
  return (
    <div>
      <VStack  >
        <Navbar />
        {/* <Home />   */}
   
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path='/stunt' element={<StuntList />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/addstunt' element={<InsertStunt />} />
        </Routes>
  
        {/* <Footer /> */}
        <Box bgImage={backg} backgroundPosition={"top"} position={"fixed"} zIndex={"-1"} w={"100%"} h={"100%"} top={"0"} opacity={"0.05"} />\
        <Box
      zIndex="-2"
      position="fixed"
      top="0"
      width="100%"
      height="100%"
      bgGradient="linear(to-r, rgba(2,0,36,1), rgba(14,28,39,1), rgba(0,212,255,1))"
      bgSize="100% 100%"
    />
      </VStack>
      
    </div>
  )
}

export default App