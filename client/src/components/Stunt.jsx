// import React from 'react';
// import {
//   Box,
//   AspectRatio,
//   HStack,
//   VStack,
//   Flex,
//   Heading,
//   Text,
//   Image,
//   Avatar,
//   Button,
//   GridItem,
//   Grid
// } from '@chakra-ui/react';
// import { AddIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';
// import { MagnifyingGlass } from 'react-loader-spinner';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// const Stunt = ({ stunt }) => {
//   return (
//     <>
//       {stunt.length === 0 ? (
//         <Flex justifyContent="center" my="35vh" alignItems="center">
//           <MagnifyingGlass
//             visible={true}
//             height="80"
//             width="80"
//             ariaLabel="magnifying-glass-loading"
//             wrapperStyle={{}}
//             wrapperClass="magnifying-glass-wrapper"
//             glassColor="#c0efff"
//             color="#e15b64"
//           />
//         </Flex>
//       ) : (
//         <div>
//           <Grid templateColumns={['repeat(1, 1fr)', 'repeat(auto-fit, minmax(400px, 1fr))']} gap={4} placeItems="center" whiteSpace="30" maxWidth="80vw" w="100%">
//             {stunt.map((stunt) => (
//               <GridItem key={stunt._id} spacing={10} my={10}>
//                 <Box zIndex={5} w="18vmax" h="fit-content" bgColor="#F2EDF8" p={2} rounded="10px">
//                   <AspectRatio maxW="560px" ratio={4 / 3}>
//                     <Image src={stunt.image_link ? stunt.image_link : stunt.image} />
//                   </AspectRatio>
//                   <VStack spacing={2}>
//                     <Text as="h1" color="#2B2437" p={1} fontSize="large">
//                       {stunt.title}
//                     </Text>
//                     <Box>
//                       <HStack justify="space-between" spacing={19} mx={2}>
//                         <HStack>
//                           <Box m={1}>
//                             <Avatar />
//                           </Box>
//                           <Box alignItems="center">
//                             <Text fontSize="15px" fontWeight="600">
//                               {stunt.created_by ? stunt.created_by : 'Carl Henry'}
//                             </Text>
//                             <Text color="gray">{stunt.time ? stunt.time : '9 days ago'}</Text>
//                           </Box>
//                         </HStack>
//                         <Box display="flex" alignItems="center">
//                           <FavoriteBorderOutlinedIcon /> &nbsp;
//                           <Text>{stunt.failRating}</Text>
//                         </Box>
//                       </HStack>
//                     </Box>
//                   </VStack>
//                 </Box>
//               </GridItem>
//             ))}
//           </Grid>
//           <Box>
//             <Link to="/addstunt">
//               <Button
//                 position="fixed"
//                 bottom="2%"
//                 right="1%"
//                 className="btn btn1"
//                 zIndex={7}
//                 border="3px solid #101010"
//                 _hover={{
//                   cursor: 'pointer',
//                   transform: 'scale(1.03)'
//                 }}
//               >
//                 <AddIcon />
//               </Button>
//             </Link>
//           </Box>
//         </div>
//       )}
//     </>
//   );
// };

// export default Stunt;


import React from 'react';
import {
  Box,
  AspectRatio,
  HStack,
  VStack,
  Flex,
  Heading,
  Text,
  Image,
  Avatar,
  Button,
  GridItem,
  Grid
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Stunt = ({ stunt }) => {
  return (
    <>
      {stunt.length === 0 ? (
        <Flex justifyContent="center" my="35vh" alignItems="center">
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
        <div>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(auto-fit, minmax(300px, 1fr))']} gap={4} placeItems="center" maxWidth="80vw" mx="auto">
            {stunt.map((stunt) => (
              <GridItem key={stunt._id} spacing={10} my={10}>
                <Box zIndex={5} w="100%" bgColor="#F2EDF8" p={2} rounded="10px">
                  <AspectRatio ratio={4 / 3}>
                    <Image src={stunt.image_link ? stunt.image_link : stunt.image} />
                  </AspectRatio>
                  <VStack spacing={2} mt={2}>
                    <Text as="h1" color="#2B2437" fontSize="large">
                      {stunt.title}
                    </Text>
                    <HStack justify="space-between" w="100%">
                      <HStack>
                        <Avatar />
                        <VStack alignItems="start">
                          <Text fontSize="15px" fontWeight="600">
                            {stunt.created_by ? stunt.created_by : 'Carl Henry'}
                          </Text>
                          <Text color="gray">{stunt.time ? stunt.time : '9 days ago'}</Text>
                        </VStack>
                      </HStack>
                      <HStack alignItems="center">
                        <FavoriteBorderOutlinedIcon />
                        <Text>{stunt.failRating}</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <Box mt={4}>
            <Link to="/addstunt">
              <Button
                position="fixed"
                bottom="2%"
                right="1%"
                className="btn btn1"
                zIndex={7}
                border="3px solid #101010"
                _hover={{
                  cursor: 'pointer',
                  transform: 'scale(1.03)'
                }}
              >
                <AddIcon />
              </Button>
            </Link>
          </Box>
        </div>
      )}
    </>
  );
};

export default Stunt;
