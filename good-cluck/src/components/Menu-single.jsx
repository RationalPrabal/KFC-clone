import { GridItem } from "@chakra-ui/react";
import { Box,Badge,Image,StarIcon,Img ,Text,Button} from '@chakra-ui/react';
const Single_Card=({link,title,count,price})=>{
    return <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
<Image src={link}/>

<Box p='6'>
<Box
textAlign={"left"}

    mt='1'
    fontWeight='semibold'
    as='h4'
    lineHeight='tight'
    noOfLines={1}
  >
    {title}
  </Box>
  <Box display='flex' border={"2px solid teal"} >
  <Img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"></Img>
    <Badge mt="1" borderRadius='full' px='2' colorScheme='red'>
     Non Veg
    </Badge>
    <Text mt="1" fontSize={13}>Serves {count}</Text>
    {/* <Box
      color='gray.500'
      fontWeight='semibold'
      letterSpacing='wide'
      fontSize='xs'
      textTransform='uppercase'
      ml='2'
    >
      {property.beds} beds &bull; {property.baths} baths
    </Box> */}
  </Box>

  

   <Box textAlign={"left"}>
   ₹{price}
  </Box>

  <Box  size={"sm"} display='flex' mt='2' alignItems='center' >
  <Button mt="20"  borderRadius={"20"} bg='#df0000'>Add to Cart
  <Img ml="5" src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />
  </Button>
   
  </Box>
</Box>
</Box>
    
}



export {Single_Card}