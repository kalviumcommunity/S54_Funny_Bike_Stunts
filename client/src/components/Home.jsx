import React from 'react'
import { Flex, Wrap, WrapItem, HStack, VStack, Heading, Box , Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { ArrowRightIcon, QuestionIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import bike from "../assets/Designer.png"
import { useMediaQuery } from '@chakra-ui/react';

const Home = () => {
    const [isLargerthan] = useMediaQuery("(min-width: 48em)");
    return (
        <div>
            <Flex flexDirection={{ base: "column", md: "row" }} flex={"1"} m={"10"} spacing={{ base: "4", md: "0" }} align={{ base: "center", md: "stretch" }} >
                {isLargerthan ? (
                    <HStack spacing={"1vw"} w={"40vw"} wrap={"wrap"} justify={"space-evenly"} mb={"5vh"}>
                        <Image src={bike} w={"30vmax"} />
                    </HStack>
                ) : (
                    <Image src={bike} w={"80%"} />
                )}

                <VStack
                    mt={{ base: "7%", md: "10%" }}
                    spacing={{ base: "2vh", md: "4vh" }} color={"white"} textAlign={{ base: "center", md: "left" }}>
                    <Heading fontFamily={"Aclonica"}>
                        Where Bike Stunts
                    </Heading>
                    <Heading fontFamily={"Aclonica"} > take a Hilarious Detour</Heading>
                    <Wrap m={"4"} justify={{ base: "center", md: "flex-start" }}>
                        <WrapItem>
                            <Link to={'/stunt'} >
                                <Button _hover={{ cursor: "pointer" }} rightIcon={<ArrowRightIcon />} variant='solid' colorScheme='telegram'>Explore </Button>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link to={'/faq'} >

                                <Button backgroundColor={"white"} rightIcon={<QuestionIcon />} variant='outline' colorScheme='telegram'>FAQ</Button>
                            </Link>
                        </WrapItem>
                    </Wrap>
                </VStack>
            </Flex>
        </div>
    )
}

export default Home
