import React, { useEffect, useState } from "react";
import axios from "axios";
import Stunt from "../Stunt";
import {
  Box,
  AspectRatio,
  HStack,
  VStack,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar, Button } from "@chakra-ui/react";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { MagnifyingGlass } from "react-loader-spinner";

const EditStunt = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://funny-bike-stunt-fails-sravanr788.onrender.com/bike"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const stunt = data;

  const handleDelete = (id) => {
    axios
      .delete(
        `https://funny-bike-stunt-fails-sravanr788.onrender.com/bike/${id}`
      )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log("error", err));
    console.log(id);
  };

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
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(auto-fit, minmax(300px, 1fr))",
            ]}
            gap={4}
            placeItems="center"
            maxWidth="80vw"
            mx="auto"
          >
            {stunt.map((stunt) => (
              <GridItem key={stunt._id} spacing={10} my={10}>
                <Box zIndex={5} w="100%" bgColor="#F2EDF8" p={2} rounded="10px">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={stunt.image_link ? stunt.image_link : stunt.image}
                    />
                  </AspectRatio>
                  <VStack spacing={2} mt={2}>
                    <Text as="h1" color="#2B2437" fontSize="large">
                      {stunt.title}
                    </Text>
                    <HStack justify="space-between" spacing={[4, 19]} mx={2}>
                      <HStack>
                        <Link to={`/update/${stunt._id}`}>
                          <Button
                            colorScheme="green"
                            variant="outline"
                            p={["2px 10px", "6px 16px"]}
                          >
                            Update
                          </Button>
                        </Link>
                        <Button
                          colorScheme="red"
                          variant="solid"
                          onClick={() => {
                            handleDelete(stunt._id);
                          }}
                          p={["2px 10px", "6px 16px"]}
                        >
                          Delete
                        </Button>
                      </HStack>
                      <HStack alignItems="center">
                        <FavoriteBorderOutlinedIcon /> &nbsp;
                        <Text>{stunt.failRating}</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>

          <Box>
            <Link to="/addstunt">
              <Button
                position="fixed"
                bottom="2%"
                right="1%"
                className="btn btn1"
                zIndex={7}
                border="3px solid #101010"
                _hover={{ cursor: "pointer", transform: "scale(1.03)" }}
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

export default EditStunt;
