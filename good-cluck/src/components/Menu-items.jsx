import { Box,Badge,Image,StarIcon } from '@chakra-ui/react';
import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Single_Card } from './Menu-single';
function AirbnbCard() {
    const [products,setProducts]= React.useState([])
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
    let res= await fetch(`http://localhost:3000/products?_limit=100`);
    let data= await res.json();
    console.log(data)
    setProducts(data)
}
  React.useEffect(()=>{
fetching()
  },[])
    
     
    
     return <Grid templateColumns='repeat(2, 1fr)' gap={6}>
  {
    products.map((el)=><Single_Card link={el.link} title={el.title} price={el.price} count={el.count}/>)
  }
</Grid>
    
     }
  export default AirbnbCard