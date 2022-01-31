import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const isNameError = name === ''
    const isEmailError = email === ''

  return (
      <Box className="form" margin="10px">
        <FormControl 
            isInvalid={name === '' || email === ''} 
            bg="white"
            padding="10px"
            >
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input 
                id="name" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                w="300px"
            />
            {isNameError && (<FormErrorMessage>This field is required</FormErrorMessage>)}
            <FormLabel htmlFor="email" marginTop="10px">Email</FormLabel>
            <Input 
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            {isEmailError && (<FormErrorMessage>This field is required</FormErrorMessage>)}
            <Button 
                variant="red-bg" 
                size="sm" 
                marginTop="10px"
                type="submit"
            >
                Submit
            </Button>
        </FormControl>
      </Box>
  );
};
