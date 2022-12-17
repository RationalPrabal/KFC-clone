import { Route, Routes } from "react-router-dom";
import { Deals } from "./Deals";
import { Home } from "./Homepage";
import Menu from "./Menu";
import Cart from "./Cart";
const AllRoutes=()=>{
    return (
        <div>
         <Routes>
    <Route path="/" element={<Home/>}   />
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/deals" element={<Deals/>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/cart/:id" element={<Cart/>}/>
         </Routes>
        </div>
    )
}

export {AllRoutes}