import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import WithSubnavigation from '../components/Navbar';
  import Modal_SignIn from '../components/Modal-SignIn';
  import React from 'react';
  export default function SignIn() {
const [number,setNumber]= React.useState()
    return (
        <>
        <WithSubnavigation/>
       
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'50%'}
        
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
          </Heading>
          
         <Input type={"number"}  placeholder='*Phone Number' onChange={(e)=>setNumber(e.target.value)} value={number}></Input>
         <Text fontSize={"10"}>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text>
    <Modal_SignIn number={number}/>
       
         <Text>or</Text>
            <Button>Skip, Continue As Guest</Button>
        
        </Stack>
      </Flex>
      </>
    );
  }