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

import axios from 'axios';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Link, redirect } from 'react-router-dom';

const InsertStunt = () => {    
  const [input, setInput] = useState('');
  const [link, setLink] = useState('');
  const [rating, setRating] = useState('');
  // const Redirect = redirect()
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  const username = getCookie('username')
    const data = {
    "title" : input ,
    "image" : link ,
    "failRating" : rating,
    "created_by" : username,
    }
  const SubmitPost = (e) => {
    e.preventDefault();
    const postStunt = async () => {
      try {
        let res = await axios.post('https://funny-bike-stunt-fails-sravanr788.onrender.com/bike',data);
        console.log(data)
        redirect("/stunt")
        console.log(res)
        console.log('Stunt posted successfully!');
      } catch (err) {
        console.error('Error posting stunt:',username, err);
      }
    };
    postStunt();
  };

  const handleInputChange = (e) => setInput(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleRatingChange = (valueAsString) => setRating(valueAsString);

  const isError = input === '';

  return (
    <div>
      <FormControl  color="black" isInvalid={isError} mt={{base : "6"}} w={{base : "90vw",md : "40vw"}} p={{ base: "5%", md: "3%" }}bgColor={"white"} rounded={"25px"} align="center">
        <Heading my={"2%"}>New Post </Heading>
        <Text>Please Enter the following details</Text>
        <FormLabel  my={"2%"}>Title</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>Enter the title you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Title is required.</FormErrorMessage>
        )}

        <FormLabel my={"2%"}>Link</FormLabel>
        <Input type="text" value={link} onChange={handleLinkChange} />
        {!isError ? (
          <FormHelperText>Provide the link of the stunt you'd like to add.</FormHelperText>
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
        <Button className='btn btn2' my={"2%"} onClick={SubmitPost}>Submit</Button>
      </FormControl>
    </div>
  );
};

export default InsertStunt