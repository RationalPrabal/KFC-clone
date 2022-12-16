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
  import React from 'react';
  import Map from './map';
function InitialFocuss() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
     
    

        <Button  onClick={onOpen} mt="8" borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Delivery</Button>
           <br></br>
           <Button  onClick={onOpen} mt="8" borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Pickup</Button>
           <br></br>
           <Button  onClick={onOpen} mt="8"  borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Dine In</Button>
    
  
  
        <Modal  size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader textAlign={"center"}>Delivery Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign={"center"}>
           <Input mt="20" placeholder='enter your address'/>
           
           <Input mt="5" placeholder='enter your Pincode/Zipcode' />
           <Button mt="50px" colorScheme={"teal"}>Confirm</Button>
         
  </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocuss