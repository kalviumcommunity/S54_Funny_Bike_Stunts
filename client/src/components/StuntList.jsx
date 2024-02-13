import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stunt from './Stunt'
import { Flex, Grid } from '@chakra-ui/react'


const StuntList = () => {

  const [data, setData] = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("https://funny-bike-stunt-fails-sravanr788.onrender.com/bike")
    .then((data)=>{
      setData(data.data);
    }).catch((err)=>{
      console.log(err);
    })
    }, 1000)
  }, [])

  return (
    <>
          <Flex justify={"center"}>

{data.length == 0 ? (
  
  <BarLoader color='white'/>
  ) : (
    <Grid templateColumns='repeat(3, 1fr)' justifyItems={"center"} gap={6}>
  {data.map((e,i)=>{
    return (
      <Stunt stunt={data[i]} key={i}/>
      )
    })}
</Grid>
)}
</Flex>
    </>
  )
}

export default StuntList