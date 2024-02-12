import { Button } from '@chakra-ui/button'
import { CloseButton } from '@chakra-ui/close-button'
import { Icon } from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import React from 'react'
import { EditIcon } from '@chakra-ui/icons'


const Navbar = () => {
  return (
    <Flex justify={"center"} mt={"3vh"} pos={"sticky"} top={"3vh"} zIndex={"10"}>
      <Flex justifyContent="center" borderBottom="1px solid" boxShadow="0px 2px 5px black" w="70vw" bgColor="rgba(245, 245, 245)" rounded="20px"
        >

        <Box w={"100dvw"} margin={"1.5vh 0vw 1.5vh 1.5vw"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
          <Link to={"/"} >
          <Flex >
            <Image src={logo} w={"13vmax"}></Image>
          </Flex>
          </Link>

          <Box display={"flex"} fontWeight={"600"} alignItems={"center"}>
            <Link to={'/faq'}>
              
            <Box className='btn btn1' mr="1.5vw" p="6px" borderRadius="5px" cursor="pointer" zIndex={"4"}
              borderTop="3px solid #3498db"
              > <Text pos={"relative"} fontSize={"1.1vmax"}> FAQ </Text> </Box>
              </Link>


            <Box className='btn btn1' mr="1.5vw" p="6px" borderRadius="5px" cursor="pointer" zIndex={"4"}
              borderTop="3px solid #3498db"
            > <Text pos={"relative"} fontSize={"1.1vmax"}> Sign Up </Text> </Box>   

            <Button className='btn btn3'>
              <EditIcon />
            </Button>
            
          </Box>
        </Box>

      </Flex>
    </Flex>
  )
}

export default Navbar