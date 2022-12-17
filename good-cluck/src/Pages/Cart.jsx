import { useParams } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import React from "react";
const Cart=()=>{

    const {id}= useParams();
    const [product,setProduct]=React.useState([]);
    const fetching=async ()=>{
        let response=await fetch(`http://localhost:3000/products/${id}`);
        let data= await response.json();
     
        setProduct([...product,data])
    }
    React.useEffect(()=>{
fetching();
    },[])
    console.log(product)
    return(
        <div>
            <Grid>

            </Grid>
        
        </div>
    )
}

export default Cart;