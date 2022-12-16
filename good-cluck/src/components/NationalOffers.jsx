import { Box, Text } from "@chakra-ui/react";
import { Grid,GridItem } from "@chakra-ui/react";
import { National_Single } from "./National-Single";
import React from "react";
const NationalOffers=()=>{
    const data=[
        {
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg",
            "title": "Add 2 Pc Hot n Crispy",
            "details":"Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on",

        },
        {
            
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg",
            "title": "Upto Rs 100 off on min",
            "details":"Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for",
        },
        {
            
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg",
            "title": "1 Pc free Chicken...",
            "details":"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered...",
        },
        {
            
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg",
            "title": "1 Pc free Veg Zinger on....",
            "details":"1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users",
        }
    ];
    const [Data,setData]=React.useState(data)
return(
    <div  >
        <Box mt="100" width={"60%"}>
        <Text  fontSize={"38px"} fontFamily={"National2"} fontWeight={"700"} >NATIONAL OFFFERS</Text>
        </Box>
<Box>
<Grid w={"70%"} m="auto" mt="30" templateColumns='repeat(3, 1fr)' gap={6}>
  {
    Data.map((el)=><National_Single img={el.img} title={el.title} details={el.details} />)
  }
</Grid>
</Box>
    </div>
)
}

export default NationalOffers;