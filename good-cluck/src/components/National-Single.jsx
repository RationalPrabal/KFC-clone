import { GridItem } from "@chakra-ui/react"

import { Box,Img,Image,Button,Text } from "@chakra-ui/react"
import InitialFocus from "./Modal-National";
import Details_Modal from "./Details-Modal";
function National_Single({details,img,title}) {
 
    return (
      
        
      <Box padding={"4"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={img}  />
  
        <Box p='6'>
          {/* <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
   */}

<Box
            mt='1'
            fontWeight='bold'
            fontSize={"30px"}
         color={"#e32a28"}
           
            noOfLines={1}
          >
            {title}
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={2}
          >
            {details}
          </Box>
  
          {/* <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box> */}
  
          {/* <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box> */}
        </Box>
       <Box  display={"flex"} justifyContent="space-around">
        <Details_Modal details={details} title={title} />
      <InitialFocus/>
       </Box>
      
      </Box>
      
    )

  }

  export {National_Single}