import React from 'react'
import { Button } from "@chakra-ui/button";
import { VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
    <VStack spacing="5px">
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      ></Input>
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <Input
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Confirm Password</FormLabel>
      <Input
        placeholder="Enter Your Password Again"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>
    </FormControl>
    <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        // onClick={submitHandler}
        // isLoading={picLoading}
      >
        Login
      </Button>
  </VStack>
  </>
  )
}

export default Login