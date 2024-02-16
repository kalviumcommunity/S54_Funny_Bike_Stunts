import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Stunt from '../Stunt'
import { Box, AspectRatio, HStack, VStack, Flex,Grid , GridItem, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Avatar, Button } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { MagnifyingGlass } from 'react-loader-spinner'

const EditStunt = () => {
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
    }, [])
    const stunt = data
    const handleDelete = (id) => {
        axios
          .delete(`https://funny-bike-stunt-fails-sravanr788.onrender.com/bike/${id}`)
          .then(() => {
            window.location.reload()
          })
          .catch((err) => console.log("error",err));
          console.log(id)
      };
  return (
    <>
    {stunt.length==0 ?
      (
        <Flex justifyContent={"center"} my={"35vh"} alignItems={"center"}>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
      />
      </Flex>
    ) : (
      <div> <Grid templateColumns='repeat(auto-fit , minmax(400px,1fr))' placeItems={"center"} whiteSpace={"30"}  maxWidth={"80vw"} w={"100%"}>
    
      {stunt.map((stunt)=>(
        
        <GridItem key={stunt._id} spacing={10} my={"10"} >
      <Box zIndex={"5"} w={"18vmax"} h={"fit-content"} bgColor={"#F2EDF8"} p={"2"} rounded={"10px"}>
        <AspectRatio maxW='560px' ratio={4/3}>
          <Image
            src={stunt.image}
            ></Image>
        </AspectRatio>
        <VStack spacing={"2"}>
          <Text as={"h1"} color={"#2B2437"} p={"1"} fontSize={"large"}>{stunt.title}</Text>
          <Box>
            <HStack justify={'space-between'} spacing={"19"} mx={"2"}>
              <HStack>
                <Link to={`/update/${stunt._id}`}>
               <Box><Button colorScheme='green' variant={"outline"} >Update</Button></Box>
                </Link>
               <Box><Button colorScheme='red' variant={'solid'}
               onClick={()=>{handleDelete(stunt._id)}}
               >Delete</Button></Box>
              </HStack>

              <Box display={"flex"} alignItems={"center"}>
                <FavoriteBorderOutlinedIcon /> &nbsp;
                <Text>{stunt.failRating}</Text>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
            </GridItem>
      ))}
      <Box>
        <Link to='/addstunt' >
        <Button position={"fixed"} bottom={"2%"} right={"1%"} className='btn btn1' zIndex={"7"} border="3px solid #101010" _hover={{
          cursor : "pointer" , transform : "scale(1.03)"
        }}>
          <AddIcon />
        </Button>
          </Link>
      </Box>
      </Grid>
    </div>
)}
  </>
  )
      }
export default EditStunt