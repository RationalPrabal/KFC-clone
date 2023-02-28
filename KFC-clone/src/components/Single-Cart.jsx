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
  import { Spinner } from '@chakra-ui/react';
  export default function SocialProfileWithImageHorizontal({image,price,name,setAmount,id,fetching,ch,setCh,quant,setLoader}) {
    const [l,sl]= React.useState(false);
   // const [count,setCount]= React.useState(1);
    const Delete=(id)=>{
    //  setLoader(true)
    sl(true)
      console.log("sdf")
      axios.delete(`https://vercel-backend-mocha.vercel.app/carts/${id}`).then((res)=>console.log(res));
      sl(false)
    //  fetching()
    }

    const handleSub=(id)=>{
    //  setCount(count-1)
    sl(true)
      axios.patch(`https://vercel-backend-mocha.vercel.app/carts/${id}`,{
        "quant":quant-1
      })
      setCh(ch+1)
      sl(false)
   //   fetching()
    }

    const handleAdd=  (id)=>{
      sl(true)
  //    setCount(count+1)
  axios.patch(`https://vercel-backend-mocha.vercel.app/carts/${id}`,{
       "quant":quant+1
      }).then((res)=>console.log(res))
      setCh(ch+1)
      sl(false)
   //   fetching()
    }
   
    return l ? <Spinner ml="50"/>: (
      <div >
      <GridItem  w="60%" mt="10" >
      <div style={{display:"flex",justifyContent:"space-around"}} >
        <div>
          <Image w="50%" src={image} />
        
        </div>
     
      <Text w="100%" mr="50">{name}</Text>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <Button disabled={quant===1}  onClick={()=>handleSub(id)}
          >-</Button>
          <Button border={"3px solid white"}>{quant}</Button>
          <Button border={"3px solid white"} onClick={()=>handleAdd(id)} >+</Button>
        </div>
        <div>
        ₹{price*quant}
     
    
        </div>
      
      </div>
    
     
      </GridItem>
        <Button w={"10%"} m="auto" colorScheme={"red"} onClick={()=>Delete(id)} >Remove</Button>
        </div>
    );
  }