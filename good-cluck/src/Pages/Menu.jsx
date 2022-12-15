import SimpleSidebar from "../components/sidebar";
import WithSubnavigation from "../components/Navbar";
import AirbnbCard from "../components/Menu-items";
const Menu=()=>{
    return <>
    <WithSubnavigation/>
  <div style={{display:"flex"}} >
<SimpleSidebar/>
<AirbnbCard/>
  </div>
    
    
    </>

}

export default Menu;