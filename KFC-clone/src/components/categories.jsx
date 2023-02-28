import { Box,   Center,
    useColorModeValue,
    Heading,
 Grid,
    Stack,
    Image, Text } from "@chakra-ui/react";
    import Cat_card from "./category-card";
    import LargeWithAppLinksAndSocial from "./Footer";
    import React from "react";
const Categories=()=>{
    
    const arr=[
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=22.82",
            title:"HOT DEALS",
        },
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=22.82",
            title:"CHICKEN BUCKETS",
        },
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=22.82",
            title:"HOT LAUNCHES",
        },
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=22.82",
            title:"BOX MEALS",
        },
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.82",
            title:"BURGERS",
        },
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=22.82",
            title:"BIRYANI BUCKETS",
        },
        {
            img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=22.82",
            title:"SNACK",
        },
        {
            img:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
            title:"View All Menu",
        },
    ]
    const [data,setData]= React.useState(arr)
   return <>
   <Box ml="10%" width={"40%"}>
 <Text fontSize='44px' fontWeight={"700"} fontFamily="National 2 Condensed" mt="20">
 Welcome to KFC!
</Text>
</Box>
<Text mt="140px" w="40%" ml="11.5%" fontSize={"34px"} fontWeight="700" lineHeight={"43px"}  fontFamily="National 2 Condensed">BROWSE CATEGORIES</Text>
<div style={{width:"80%",marginLeft:"20%"}}>
<Grid  mt="40px" templateColumns='repeat(4, 1fr)' gap={4}>
  



  {
   
data.map((el,i)=><Cat_card img={el.img} title={el.title} index={i}  />)
  }
  
</Grid>

</div>
    </>
}

export {Categories};




  
 