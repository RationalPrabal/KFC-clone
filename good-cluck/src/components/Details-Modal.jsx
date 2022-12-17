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
  import InitialFocus from './Modal-National';
function Details_Modal({details,title}) {
    const [location,setLocation]= React.useState("details")
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
     
    

        
           <Text onClick={onOpen}  mt="1" as="u">View Details</Text>
  
        <Modal  size={"2xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
            <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"24px"} textAlign={"left"} fontWeight="700">OFFERS & DEALS</ModalHeader>
            </div>
            <ModalCloseButton />
            <ModalBody textAlign={"center"}>
                <Box textAlign={"center"}>
           <Text m="auto" w="80%" fontSize={"20px"} fontWeight="700">{details}</Text>
           <Text mt="6">Valid till 30/12/22</Text>
           <Text w="80%" m="auto" mt="6">{details}</Text>
           </Box>
  </ModalBody>
          <ModalFooter >
        <InitialFocus location={location}/>
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Details_Modal