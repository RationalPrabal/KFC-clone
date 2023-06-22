import { Box,Badge,Image,StarIcon,Text } from '@chakra-ui/react';
import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Single_Card } from './Menu-single';
import { Skeleton, SkeletonCircle, SkeletonText,Stack } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import Loader from './loader';
import { Progress } from '@chakra-ui/react';
function AirbnbCard() {
    const [products,setProducts]= React.useState([])
    const [loader,setLoader]= React.useState(true)
//     const arr= [{
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'Rear view of modern home with pool',
//       beds: 3,
//       baths: 2,
//       title: 'Modern home in city center in the heart of historic Los Angeles',
//       formattedPrice: '$1,900.00',
//       reviewCount: 34,
//       rating: 4,
//     },
//     {imageUrl: 'https://bit.ly/2Z4KKcF',
//     imageAlt: 'Rear view of modern home with pool',
//     beds: 3,
//     baths: 2,
//     title: 'Modern home in city center in the heart of historic Los Angeles',
//     formattedPrice: '$1,900.00',
//     reviewCount: 34,
//     rating: 4,
//   },


// ]

const fetching=async()=>{
    let res= await fetch(`https://vercel-backend-mocha.vercel.app/products`);
    let data= await res.json();
    console.log(data)
    setLoader(false);
    setProducts(data)
}
  React.useEffect(()=>{
fetching()
  },[])
    
     
    
     return loader ? <Loader/>: <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)"}} gap={6}>

  { products.map((el,i)=> <Single_Card id={el.id} image={el.images} name={el.name} price={el.price} type={el.type} description={el.description}/>)
}
</Grid>
    
     }
  export default AirbnbCard