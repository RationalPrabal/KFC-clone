import { GridItem } from "@chakra-ui/react";
import { Img,Text } from "@chakra-ui/react";
const Cat_card=({img,title,index})=>{
return(
    <>
     <GridItem  ><Img w="85%" src={img}/>
{
    index==7 ?  <Text fontWeight={"700"} fontSize="15px" mt={"50px"}>{title}</Text> : <Text fontWeight={"700"} fontSize="15px" mt={"10px"} fontFamily={"National 2 Condensed"} >{title}</Text>
}
    
     </GridItem>
     
    </>
)
}
export default Cat_card