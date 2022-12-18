import { useParams } from "react-router-dom";
import { Box, Grid,Text } from "@chakra-ui/react";
import React from "react";
import Checkout from "../components/Checkout";
import WithSubnavigation from "../components/Navbar";
import SocialProfileWithImageHorizontal from "../components/Single-Cart";
const Cart=()=>{

    const [amount,setAmount]= React.useState(0)
    const [product,setProduct]=React.useState([]);
    const [count,setCount]= React.useState(1);

    const handleAdd=(id)=>{
        let abc=product.filter((el)=>{
        if(el.id==id){
            return el
        }})
        console.log(abc[0].price);
        setCount(abc[0].count++);
        setAmount((val)=>val=val+abc[0].price)
// product.map((el)=>{
//     if(id==el.id){
//      
//         setAmount((val)=>val=val+el.price)
//     }

// })
    }
    const handleSub=(id)=>{
        let abc=product.filter((el)=>{
            if(el.id==id){
                return el
            }})
            console.log(abc[0].price);
            setCount(abc[0].count--);
            setAmount((val)=>val=val-abc[0].price)
    }
   
    const fetching=async ()=>{
        let response=await fetch(`http://localhost:3000/carts`);
        let data= await response.json();
     
        setProduct(data);
   //     setAmount(getTotal());
console.log(data)
    }
 
// product.length!==0 ? for(var i=0;i<product.length;i++){
// setAmount((val)=>val=val+product[i].price) 
//     } :console.log("fsd");

const getTotal=()=>{
    let total
    if(product.length!==0){
        total= product.reduce(function(ac,el){
            return ac+el.price
       },0)
 
    }
    setAmount(total)
}




//console.log(acc)
  
    React.useEffect(()=>{
        
        getTotal()
     
    },[product]) ;
    React.useEffect(()=>{
        fetching();
        //var acc=0
        
        
            },[product]);
    return(
        <>
        <WithSubnavigation/>
      <Box mt="10" ml="20" textAlign={"left"}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" />
        <Text fontSize={"30px"} fontWeight="700">MY CART</Text>
        </Box>
      
        <div style={{display:"flex"}}>
            <Grid>

{
    
    product?.map((el)=><SocialProfileWithImageHorizontal image={el.link} price={el.price} title={el.title} fetching={fetching} setAmount={setAmount} id={el.id} handleAdd={handleAdd} handleSub={handleSub} count={el.count} />)
}

            </Grid>
        <Checkout  amount={amount}/>
        </div>
        </>
    )
}

export default Cart;