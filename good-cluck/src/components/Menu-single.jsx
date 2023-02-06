import { GridItem } from "@chakra-ui/react";
import { Box,Badge,Image,Img,Text,Button} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
const Single_Card=({image,name,count,price,type,id,description})=>{
  const [text,setText]=React.useState("Add to Cart")
const AddToCart=()=>{
 setText("Added to Cart")
  axios.post(`https://vercel-backend-mocha.vercel.app/carts`,{
  id, image,price,name,quant:1,
}).then((res)=>console.log(res))
}


    return <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
   
  
<Image src={image}/>

<Box p='6'>
<Box
textAlign={"left"}

    mt='1'
    fontWeight='semibold'
    as='h4'
    lineHeight='tight'
    noOfLines={1}
  >
    {name}
  </Box>
  <Box display='flex' >
    {type==="Non veg" ?
  <><Img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Img>
    <Badge mt="1" borderRadius='full' px='2' colorScheme='red'>
     {type}
    </Badge></> :<><Img src="https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg"></Img>
    <Badge mt="1" borderRadius='full' px='2' colorScheme='green'>
     {type}
    </Badge></>

}
    
  </Box>

  

   <Box textAlign={"left"} fontWeight={"700"}>
   ₹{price}
  </Box>
<Text noOfLines={2} color={"#5e5e5e"} textAlign={"left"} fontSize={"15px"} fontWeight={400}>{description}</Text>
  <Box  size={"sm"} display='flex' mt='8' alignItems='center' >
  <Button disabled={text==="Added to Cart"} onClick={AddToCart} borderRadius={"20"} bg='#e4002b'>
 {text}
  <Img ml="5" src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />
  </Button>
   
  </Box>
</Box>
</Box>
    
}



export {Single_Card}