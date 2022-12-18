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
  import { PinInput, PinInputField ,HStack} from '@chakra-ui/react'
  import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
function Modal_Final() {
  
    const { isOpen, onOpen, onClose } = useDisclosure();

  
    
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  
    return (
      <>
        
        <Button size={"lg"} onClick={onOpen} w="50%" m="auto" mt="30"  colorScheme="green">Pay</Button>
        <Modal  size={"full"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent  border={"2px solid white"}>
          <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"30px"} fontWeight="700" textAlign={"center"}>Voila!!!!</ModalHeader></div>
            <ModalCloseButton />
            <ModalBody display={"flex"} justifyContent={"center"}>
      <Image w="60%" h="400" src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"></Image>
         
  </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"}>
            <RouterLink to="/">   <Button mt="-200" w="50%" color={"green"}>Back to HomePage</Button></RouterLink>
         
              </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modal_Final;