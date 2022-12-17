import { Box, Text } from "@chakra-ui/react";
import { Grid,GridItem } from "@chakra-ui/react";
import { National_Single } from "./National-Single";
import React from "react";
const NationalOffers=()=>{
    const data=[
        {
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg",
            "title": "Add 2 Pc Hot n Crispy",
            "details":"ADD 2 PC HOT N CRISPY CHICKEN @ JUST RS 99 ON MIN CART VALUE OF RS 499 OR MORE. APPLICABLE ON 2ND & 3RD ORDER FOR SIGNED IN USER.",

        },
        {
            
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg",
            "title": "Upto Rs 100 off on min",
            "details":"UPTO RS 100 OFF ON MIN CART VALUE OF RS 599 OR MORE . APPLICABLE ON 4TH ORDER ONWARDS FOR SIGNED IN USER.",
        },
        {
            
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg",
            "title": "1 Pc free Chicken...",
            "details":"1 PC FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS.",
        },
        {
            
            "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg",
            "title": "1 Pc free Veg Zinger on....",
            "details":"1 PC FREE VEG ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS",
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