import React, { useState } from 'react';
import { HamburgerIcon, EditIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Flex justify={"center"} mt={"3vh"} pos={"sticky"} top={"3vh"} zIndex={"10"}>
      <Flex justifyContent="center" borderBottom="1px solid" boxShadow="0px 2px 5px black" w={{base : "95vw", md : "75vw"}} bgColor="rgba(245, 245, 245)" rounded="20px">
        <Box w={"100dvw"} margin={"1.5vh 0vw 1.5vh 1.5vw"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
          <Box display={{ base: "flex", md: "none" }} alignItems={"center"}>
            <Link to={"/"} >
              <Flex>
                <Image src={logo} w={"20vmax"} />
              </Flex>
            </Link>
          </Box>

          <Box display={{ base: "none", md: "flex" }} alignItems={"center"}>
            <Link to={"/"} >
              <Flex>
                <Image src={logo} w={"13vmax"} />
              </Flex>
            </Link>
          </Box>

          <Box display={{ base: "flex", md: "none" }} alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                aria-label='Options'
                variant='outline'
                onClick={toggleMenu}
              >
                <HamburgerIcon boxSize={8} />
              </MenuButton>
              {showMenu && (
                <MenuList backgroundColor={"transparent"}>
                  <MenuItem>
                    <Link to={'/faq'}>
                      <Text fontSize="xl">FAQ</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={'/login'}>
                      <Text fontSize="xl">Sign Up</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/editstunt"}>
                      <Button className='btn btn3'>
                        <EditIcon />
                      </Button>
                    </Link>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          </Box>

          <Box display={{ base: "none", md: "flex" }} fontWeight={"600"} alignItems={"center"}>
            <Link to={'/faq'}>
              <Box className='btn btn1' mr="1.5vw" p="6px" borderRadius="5px" cursor="pointer" zIndex={"4"} borderTop="3px solid #3498db">
                <Text pos={"relative"} fontSize={"1.1vmax"}> FAQ </Text>
              </Box>
            </Link>

            <Link to={'/login'}>
              <Box className='btn btn1' mr="1.5vw" p="6px" borderRadius="5px" cursor="pointer" zIndex={"4"} borderTop="3px solid #3498db">
                <Text pos={"relative"} fontSize={"1.1vmax"}> Sign Up </Text>
              </Box>
            </Link>

            <Link to={"/editstunt"}>
              <Button className='btn btn3'>
                <EditIcon />
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
