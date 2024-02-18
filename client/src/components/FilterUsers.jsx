import { Select } from '@chakra-ui/react'
import React from 'react'

const FilterUsers = ({filterValue ,setFilterValue, stunt}) => {
    const uniqueUsers = new Set();

    // Iterating through the stunt array and add unique created_by values to the Set
    stunt.forEach(stunt => uniqueUsers.add(stunt.created_by));

  return (
    <div>
        <Select m={"5vh 5%"} w={""} bgColor={"white"} placeholder={filterValue} size={"lg"}
        onChange={(e)=>{setFilterValue(e.target.value)}}
        >
            {[...uniqueUsers].map((user,index)=>{
                return (
                    <option key={index} value={user} >{user}</option>
                )
            })}
        </Select>
    </div>
  )
}

export default FilterUsers