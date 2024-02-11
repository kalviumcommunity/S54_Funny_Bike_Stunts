import React from 'react'
import { Box, Flex,Wrap , WrapItem, HStack,VStack, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Icon } from '@chakra-ui/icon'
import { ArrowForwardIcon, ArrowRightIcon, QuestionIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import bike from "../assets/Designer.png"

const Home = () => {
  return (
    <div>
        <HStack flex={"1"} m={"10"} >
            <HStack spacing={"1vw"} w={"40vw"} wrap={"wrap"} justify={"space-evenly"} mb={"5vh"}>
                <Box>
                    <Image src={bike} w={"30vmax"} ></Image>
                </Box>
            </HStack>
            <VStack spacing={"4vh"} color={"white"}>
                <Heading fontFamily={"Aclonica"}>
                Where Bike Stunts
                </Heading>
                <Heading fontFamily={"Aclonica"} > take a Hilarious Detour</Heading>
            <Wrap m={"4"}>
                <WrapItem>
                    <Link to={'/stunt'} >
                    <Button _hover={{cursor : "pointer"}} rightIcon={<ArrowRightIcon />} variant='solid' colorScheme='telegram'>Explore </Button>
                    </Link>
                </WrapItem>
                <WrapItem>
                    <Button backgroundColor={"white"} rightIcon={<QuestionIcon />} variant='outline' colorScheme='telegram'>FAQ</Button>
                </WrapItem>
            </Wrap>
            </VStack>
        </HStack>
    </div>
  )
}

export default Home