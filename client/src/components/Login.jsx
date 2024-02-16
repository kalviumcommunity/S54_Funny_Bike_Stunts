import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    Button,
    Text,
    InputGroup,
    InputRightElement,
    Box,
    Flex,
} from '@chakra-ui/react'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const loginHandler =async () => {
        try{
         const res = await axios.post("https://funny-bike-stunt-fails-sravanr788.onrender.com/bike/login",{
                username:username,
                password:password  
            })
            console.log(res)
              document.cookie = `token=${res.data.token};expires=Thu,18 Dec 2024 12:00:00 UTC`;
              
            }catch(err){
            console.log("err" + err)
        }
    }
    const logoutHandler = () => {
        document.cookie = `token=;expires=Thu, 18 Dec 2021 12:00:00 UTC;`;
    }
    return (
        <div>
            <FormControl color={"whitesmoke"}>
                {/* <Heading>Login</Heading> */}
                <FormLabel>Username</FormLabel>
                <Input type='email' value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <FormHelperText></FormHelperText>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Flex m={"5%"} justify={"space-around"} >
            <Button onClick={loginHandler}>Login</Button>
            <Button onClick={logoutHandler}>Log out</Button>
            </Flex>

        </div>
    )
}

export default Login