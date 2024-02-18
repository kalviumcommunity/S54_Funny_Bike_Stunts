import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stunt from './Stunt'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import FilterUsers from './FilterUsers'


const StuntList = () => {
    const [filterValue,setFilterValue] = useState('All')
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
    console.log(filterValue)
    const filteredStunt = data.filter((stunt)=>stunt.created_by == filterValue || filterValue=="All")

    return (
        <>
            <Box  justify={"center"}>
                <Box>
                <FilterUsers filterValue={filterValue} setFilterValue={setFilterValue}  stunt={data} />
                </Box>
                <Box>
                <Stunt stunt={filteredStunt} />
                </Box>

            </Box >
        </>
    )
}

export default StuntList