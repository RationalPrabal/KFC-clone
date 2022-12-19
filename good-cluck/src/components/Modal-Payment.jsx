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
    ModalCloseButton,
    Box,Button,FormControl,FormLabel, AspectRatio
  } from '@chakra-ui/react';
  import { PinInput, PinInputField ,HStack} from '@chakra-ui/react'
  import React from 'react';
  import Modal_OTP from './Modal-OTP';
function Modal_Payment() {

    const { isOpen, onOpen, onClose } = useDisclosure();

  
    
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  
    return (
      <>
        <Button onClick={onOpen} colorScheme={"black"}  variant='outline' borderRadius={"20"}>Confirm</Button> 
     
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
            <ModalBody >
         <Text fontSize={"30px"} fontWeight="600">Card Details</Text>
         
         <Input placeholder='Name'></Input>
      
         <Input type={"number"} placeholder="Card Number"></Input>
         <Text>Expiry Date</Text>
         <Input
 placeholder="Select Date and Time"
 size="md"
 type="date"
/>
<Text>CVV</Text>
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    
  </PinInput>
</HStack>

         
  </ModalBody>
          <ModalFooter>
     <Modal_OTP/>
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modal_Payment;