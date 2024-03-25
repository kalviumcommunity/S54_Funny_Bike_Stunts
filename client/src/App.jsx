import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import backg from "./assets/backg.webp";
import { Box, VStack } from '@chakra-ui/layout';
import routes from './routes/Routes';
import './App.css'

const App = () => {
  return (
    <div>
     
      <VStack>
         <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>

        <Box bgImage={backg} backgroundPosition={"top"} position={"fixed"} zIndex={"-1"} w={"100%"} h={"100%"} top={"0"} opacity={"0.05"} />
        <Box zIndex="-2" position="fixed"  top="0" width="100%" height="100%"
         bgGradient="linear(to-r, rgba(2,0,36,1), rgba(14,28,39,1), rgba(0,212,255,1))"  
         bgColor={"FFFEF8"}
          bgSize="100% 100%" />
      </VStack>
    </div>
  );
};

export default App;
