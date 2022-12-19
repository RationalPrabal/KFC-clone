import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    GridItem,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Grid,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import React from 'react';
  export default function SocialProfileWithImageHorizontal({image,price,title,setAmount,id,handleAdd,handleSub,count,fetching}) {

    const Delete=(id)=>{
      console.log("sdf")
      axios.delete(`https://vercel-backend-mocha.vercel.app/carts/${id}`).then((res)=>console.log(res));
    //  fetching()
    }
   
    return (
      <div >
      <GridItem  w="60%" mt="10" >
      <div style={{display:"flex",justifyContent:"space-around"}} >
        <div>
          <Image w="50%" src={image} />
        
        </div>
     
      <Text w="100%" mr="50">{title}</Text>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <Button disabled={count==1}  onClick={()=>{handleSub(id)}
          }>-</Button>
          <Button border={"3px solid white"}>{count}</Button>
          <Button border={"3px solid white"} onClick={()=>{handleAdd(id)}}  >+</Button>
        </div>
        <div>
        ₹{price*count}
     
    
        </div>
      
      </div>
    
     
      </GridItem>
        <Button w={"10%"} m="auto" colorScheme={"red"} onClick={()=>Delete(id)} >Remove</Button>
        </div>
    );
  }