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
    Box,Button,FormControl,FormLabel
  } from '@chakra-ui/react';
  import React from 'react';
function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        
        <Button onClick={onOpen}  borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>
    Redeem
  </Button>
  
        <Modal size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader textAlign={"center"}>START YOUR ORDER</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign={"center"}>
           <Text fontWeight={"700"} fontSize={"30px"}>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</Text>
           <br></br>
           <Button mt="8" borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Delivery</Button>
           <br></br>
           <Button mt="8" borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Pickup</Button>
           <br></br>
           <Button mt="8"  borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Dine In</Button>
  </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocus