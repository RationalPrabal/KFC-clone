
import { Box, Grid,Text } from "@chakra-ui/react";
import React from "react";
import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";
import SocialProfileWithImageHorizontal from "../components/Single-Cart";
import Loader from "../components/loader";
import Empty from "../components/empty-cart";
const Cart=()=>{

    const [amount,setAmount]= React.useState(0)
    const [product,setProduct]=React.useState([]);
    const [ch,setCh]= React.useState(0);
    const [loader,setLoader]=React.useState(true)
    // const [count,setCount]= React.useState(1);

    // const handleAdd=(id)=>{
    //     let abc=product.filter((el)=>{
    //     if(el.id==id){
    //         return el
    //     }})
    //     console.log(abc[0].price);
    //     setCount(abc[0].count++);
    //     setAmount((val)=>val=val+abc[0].price)

    // }
    // const handleSub=(id)=>{
    //     let abc=product.filter((el)=>{
    //         if(el.id==id){
    //             return el
    //         }})
    //         console.log(abc[0].price);
    //         setCount(abc[0].count--);
    //         setAmount((val)=>val=val-abc[0].price)
    // }
   
    const fetching=async ()=>{
        let response=await fetch(`https://vercel-backend-mocha.vercel.app/carts`);
        let data= await response.json();
     
        setProduct(data);
        setLoader(false)
   //     setAmount(getTotal());
   
    }
   
console.log(product)

const getTotal=()=>{
    let total
    if(product.length!==0){
        total= product.reduce(function(ac,el){
            return ac+el.price*el.quant
       },0)
 
    }
    setAmount(total)
}


React.useEffect(()=>{
    fetching();
    //var acc=0
    
    
        },[product,ch]);

//console.log(acc)
  
    React.useEffect(()=>{
        
        getTotal()
     
    },[product]) ;
   
    return(
        <>
        <Navbar/>
      <Box mt="10" ml="20" textAlign={"left"}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" />
        <Text fontSize={"30px"} fontWeight="700">MY CART</Text>
        </Box>
      {product.length ? 
        <div style={{display:"flex"}}>
            <Grid>

{ loader ? <Loader/> :
    
    product?.map((el)=><SocialProfileWithImageHorizontal image={el.image} price={el.price} name={el.name} fetching={fetching} setAmount={setAmount} id={el.id} ch={ch} setCh={setCh} quant={el.quant} setLoader={setLoader}/>)
}

            </Grid>
        <Checkout product={product} amount={amount} loader={loader}/>
        </div>: <Empty/>}
        </>
    )
}

export default Cart;