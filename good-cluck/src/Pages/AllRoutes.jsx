import { Route, Routes } from "react-router-dom";
import { Deals } from "./Deals";
import { Home } from "./Homepage";
import Menu from "./Menu";
const AllRoutes=()=>{
    return (
        <div>
         <Routes>
    <Route path="/" element={<Home/>}   />
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/deals" element={<Deals/>} />
         </Routes>
        </div>
    )
}

export {AllRoutes}