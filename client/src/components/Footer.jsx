import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Icon } from '@chakra-ui/icon'
import { Box, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/layout'

const Footer = () => {
  return (
    <div style={{
      // position : "absolute"
    }}>
      <Box bg={"black"} color={"white"}>
      <Flex justify={"space-evenly"}>
      <Box w={"100%"} borderBottom={"2px solid white"} m={""} p={"9"} >
        <HStack display={"flex"}  justifyContent={"space-between"}  spacing={"10"}>
          <VStack>
            <Heading as={"h2"}>LOGO</Heading>
            <Text as={"p"}>SOLOGAN COMPANY </Text>
          </VStack>
          <VStack>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </VStack>
          <VStack>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </VStack>
          <VStack>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </VStack>
          <VStack>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </VStack>
        </HStack>
      </Box>
      </Flex>

      <Box>
          <Box display={"flex"} justifyContent={"space-around"} w={"10%"} m={"auto"} my={"4"}>
            <GitHubIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <MailOutlineIcon />
          </Box>
          <Box>
            <Text p={"5"}>@2024 All Rights Reserved . </Text>
          </Box>
      </Box>

      </Box>
    </div>
  )
}

export default Footer