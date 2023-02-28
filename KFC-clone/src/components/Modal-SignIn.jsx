import {
    useDisclosure,
    Modal,
   Input,
   Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Image,
    ModalCloseButton,
    Box,Button,FormControl,FormLabel, AspectRatio
  } from '@chakra-ui/react';
  import { ToastExample } from './reg-toast';
  import Modal_Final from './Modal-Final';
  import { PinInput, PinInputField ,HStack} from '@chakra-ui/react'
  import React from 'react';

function Modal_SignIn({number}) {
  
    const { isOpen, onOpen, onClose } = useDisclosure();

  
    
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  
    return (
      <>
          <Button onClick={onOpen}>Send Me a Code</Button>
     
        <Modal  size={"4xl"} 
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent  border={"2px solid white"}>
          <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"30px"} fontWeight="700" textAlign={"center"}>WE JUST TEXTED YOU</ModalHeader></div>
            <ModalCloseButton />
            <ModalBody display={"grid"} justifyContent="left">
       <Text >Enter the OTP received on {number}</Text>
       <br></br>
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Text as="u">Resend the code</Text>
         
  </ModalBody>
          <ModalFooter display={"flex"} justifyContent="center">
         
          <ToastExample/>
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modal_SignIn;