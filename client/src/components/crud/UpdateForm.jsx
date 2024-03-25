import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateForm = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [rating, setRating] = useState('');

    const handleInputChange = (e) => setTitle(e.target.value);
    const handleLinkChange = (e) => setLink(e.target.value);
    const handleRatingChange = (valueAsString) => setRating(valueAsString);
    const {id} = useParams();
    const isError = title === '';

    useEffect(() => {
        const getData = async () => {

            const response = await axios.get(`https://funny-bike-stunt-fails-sravanr788.onrender.com/bike/${id}`)
                .then((res) => {
                    console.log(res.data)
                    setTitle(res.data.title)
                    setLink(res.data.image)
                    setRating(res.data.failRating)
                }).catch((err) => {
                    console.log(err);
                })
        }
        getData()
    }, [])

    const updateStunt = () =>{
        axios.patch(`https://funny-bike-stunt-fails-sravanr788.onrender.com/bike/${id}`,{
        "title" : title ,"image" : link , "failRating" :  rating
        })
        .then((res) => {
            console.log(res)
        console.log("Stunt Updated Successfully")
    })
        .catch (err => console.log(err))
    }  

  return (
    <div>
        <FormControl  color="black" isInvalid={isError} mt={{base : "6"}} w={{base : "90vw",md : "40vw"}} p={{ base: "5%", md: "3%" }}bgColor={"white"} rounded={"25px"} align="center">
        <Heading my={"2%"}>Update  Post </Heading>
        <Text>Please update  the details you want to</Text>
        <FormLabel  my={"2%"}>Title</FormLabel>
        <Input type="text" value={title} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>Enter the title you'd like to update for your post </FormHelperText>
        ) : (
          <FormErrorMessage>Title is required.</FormErrorMessage>
        )}

        <FormLabel my={"2%"}>Link</FormLabel>
        <Input type="text" value={link} onChange={handleLinkChange} />
        {!isError ? (
          <FormHelperText>Update the link of the stunt you'd like to add.</FormHelperText>
        ) : (
          <FormErrorMessage>Link is required.</FormErrorMessage>
        )}

        <FormLabel my={"2%"}>Fail Rating</FormLabel>
        <NumberInput max={10} min={0} value={rating} onChange={handleRatingChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Link to={'/stunt'}>
        <Button className='btn btn3' leftIcon={<ArrowLeftIcon />}>Go Back</Button> &nbsp; &nbsp;
        </Link>
    
        {/* <Link to={'/stunt'}> */}
        <Button className='btn btn2' my={"2%"}
        onClick={updateStunt}
        >Submit</Button>
        {/* </Link> */}
      </FormControl>
    </div>
  )
}

export default UpdateForm
