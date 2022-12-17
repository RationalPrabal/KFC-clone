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
  import Modal_Order from './Modal-Order';
  const init={
    address: "",
    pincode: ""
  }
function InitialFocuss() {
  const [type,setType]=React.useState("");
  
    const { isOpen, onOpen, onClose } = useDisclosure();

    const reducer=(state,action)=>{
switch(action.type){
  case "address" :{
   
    return {...state,address:action.payload}
  }

  case "pincode" :{
    return {...state,pincode:action.payload}
  }
}
    }
    
    const [state,dispatch]=React.useReducer(reducer,init);
    console.log(state)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handle=(e,method)=>{
      console.log(e)
     e.preventDefault()
      setType(method)
      onOpen()
    
    }
  
    return (
      <>
     
    

        <Button  onClick={(e)=>handle(e,"Delivery")} mt="8" borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Delivery</Button>
           <br></br>
           <Button  onClick={(e)=>handle(e,"Pickup")} mt="8" borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Pickup</Button>
           <br></br>
           <Button  onClick={(e)=>handle(e,"Dine In")} mt="8"  borderRadius={"20"} width="38%"  colorScheme='black' variant='outline'>Dine In</Button>
    
  
  
        <Modal  size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
          <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"30px"} fontWeight="700" textAlign={"center"}>Delivery Address</ModalHeader></div>
            <ModalCloseButton />
            <ModalBody textAlign={"center"}>
           <Input onChange={(e)=>dispatch({type:"address",payload:e.target.value})} value={state.address} mt="20" placeholder='enter your address'/>
           
           <Input onChange={(e)=>dispatch({type:"pincode",payload:e.target.value})} value={state.pincode}    mt="5" type={"number"} placeholder='enter your Pincode/Zipcode' />
          
         
  </ModalBody>
          <ModalFooter>
           <Modal_Order type={type} data={state}/>
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocuss