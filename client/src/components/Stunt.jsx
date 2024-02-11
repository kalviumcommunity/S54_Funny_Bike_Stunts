import React from 'react'
import { Box, AspectRatio, HStack, VStack, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Avatar } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Stunt = () => {
  return (
    <div>
      <Box w={"18vmax"} h={"fit-content"} bgColor={"#F2EDF8"} p={"2"} rounded={"10px"}>
        <AspectRatio maxW='560px' ratio={1}>
          <Image
            src='https://media.tenor.com/nvlMpQQcPuwAAAAM/cant-go-up-dirt-bike-fail.gif'
          ></Image>
        </AspectRatio>
        <VStack spacing={"2"}>
          <Text as={"h1"} color={"#2B2437"} p={"1"} fontSize={"large"}>#Can't-Go-Up #Dirt-Bike-Fall</Text>
          <Box>
            <HStack justify={'space-between'} spacing={"20"}>
              <HStack>
                <Box m={"1"}>
                  <Avatar />
                </Box>
                <Box alignItems={"center"}>
                  <Text fontSize={"15px"} fontWeight={"600"}>Carl laymon</Text>
                  <Text color={"gray"}>2h ago</Text>
                </Box>
              </HStack>

              <Box display={"flex"} alignItems={"center"}>
                <FavoriteBorderOutlinedIcon />
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </div>
  )
}

export default Stunt