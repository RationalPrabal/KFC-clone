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
  import Modal_Final from './Modal-Final';
  import { PinInput, PinInputField ,HStack} from '@chakra-ui/react'
  import React from 'react';

function Modal_OTP() {
  
    const { isOpen, onOpen, onClose } = useDisclosure();

  
    
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  
    return (
      <>
        
        <Button onClick={onOpen} size={"lg"} colorScheme="green">Send OTP</Button>
        <Modal  size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent  border={"2px solid white"}>
          <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"30px"} fontWeight="700" textAlign={"center"}>Your Payment Information</ModalHeader></div>
            <ModalCloseButton />
            <ModalBody alignContent={"center"}>
       <Text >Enter the OTP received on your registered Mobile number</Text>
       <br></br>
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>

         
  </ModalBody>
          <ModalFooter>
            <Modal_Final/>
         
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modal_OTP;