import React from 'react'
import { Box, AspectRatio, HStack, VStack, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Avatar } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { GridItem , Grid } from '@chakra-ui/react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Stunt = ({stunt}) => {
  console.log(stunt)
  return (
    <div> <Grid templateColumns='repeat(auto-fit , minmax(400px,1fr))' placeItems={"center"} whiteSpace={"30"}  maxWidth={"80vw"} w={"100%"}>
    
      {stunt.map((stunt)=>(

<GridItem key={stunt._id} spacing={10} my={"10"} >
      <Box zIndex={"5"} w={"18vmax"} h={"fit-content"} bgColor={"#F2EDF8"} p={"2"} rounded={"10px"}>
        <AspectRatio maxW='560px' ratio={4/3}>
          <Image
            src={stunt.image_link}
            ></Image>
        </AspectRatio>
        <VStack spacing={"2"}>
          <Text as={"h1"} color={"#2B2437"} p={"1"} fontSize={"large"}>{stunt.title}</Text>
          <Box>
            <HStack justify={'space-between'} spacing={"19"} mx={"2"}>
              <HStack>
                <Box m={"1"}>
                  <Avatar />
                </Box>
                <Box alignItems={"center"}>
                  <Text fontSize={"15px"} fontWeight={"600"}>{stunt.user}</Text>
                  <Text color={"gray"}>{stunt.time}</Text>
                </Box>
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
      </Grid>
    </div>
  )
}

export default Stunt