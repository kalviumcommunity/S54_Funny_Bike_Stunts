import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stunt from './Stunt'
import { Flex, Grid, GridItem } from '@chakra-ui/react'


const StuntList = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get("https://funny-bike-stunt-fails-sravanr788.onrender.com/bike")
                .then((data) => {
                    setData(data.data);
                }).catch((err) => {
                    console.log(err);
                })
        }
        getData()
    },[])
    console.log(data)

    return (
        <>
            <Flex justify={"center"}>

                <Stunt stunt={data} />

            </Flex>
        </>
    )
}

export default StuntList