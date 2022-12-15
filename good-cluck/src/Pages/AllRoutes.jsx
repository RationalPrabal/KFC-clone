import { Route, Routes } from "react-router-dom";

import { Home } from "./Homepage";
import Menu from "./Menu";
const AllRoutes=()=>{
    return (
        <div>
         <Routes>
    <Route path="/" element={<Home/>}   />
    <Route path="/menu" element={<Menu/>}/>
         </Routes>
        </div>
    )
}

export {AllRoutes}