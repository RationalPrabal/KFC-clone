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
  import { Link } from 'react-router-dom';
  import { useTime } from 'framer-motion';
  import { Select } from '@chakra-ui/react';
  import Datetime from 'react-datetime';
  import React from 'react';
  import Map from './map';
  import InitialFocus from './Modal-National';
function Modal_Order({details,title,type,data}) {
    const time=new Date().toLocaleTimeString();
    const [location,setLocation]= React.useState("details")
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
     
    

     <Button onClick={onOpen} w="50%"  mt="50px" m="auto" colorScheme={"black"}  variant='outline' borderRadius={"20"}>Confirm</Button>
          
  
        <Modal  size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
            <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"24px"} textAlign={"center"} fontWeight="700">SCHEDULE ORDER</ModalHeader>
            </div>
            <ModalCloseButton />
            <ModalBody textAlign={"center"}>
                <div style={{borderBottom:"2px solid white"}}>
               <Box  textAlign="left" fontSize={"18px"} fontWeight="700">
                ORDER TYPE 
               </Box>
               <Text mt="2" textAlign={"left"}>{type}</Text>
               </div>
               <div style={{borderBottom:"2px solid white"}}>
               <Box mt="5"  textAlign="left" fontSize={"18px"} fontWeight="700">
               YOUR LOCATION
               </Box>
               <Text mt="2" textAlign={"left"}>Address:{data.address}</Text>
               <Text textAlign={"left"}>Pincode:{data.pincode}</Text>
               </div>
               <div style={{borderBottom:"2px solid white"}}>
               <Box mt="5"  textAlign="left" fontSize={"18px"} fontWeight="700">
               SCHEDULE FOR YOUR ORDER
               </Box>
       <Text align={"left"}>Time</Text>
        <Box >
               <Select mt="3" w="30%" placeholder='ASAP'>
  <option value='option2'>Next 1 hour</option>
  <option value='option3'>Next 2 hour</option>
  
</Select>
</Box>

</div>

               
               
  </ModalBody>
          <ModalFooter >
            
            <Button colorScheme={"black"}  variant='outline' borderRadius={"20"}> <Link to="/menu">Confirm  </Link></Button>
          
          
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Modal_Order