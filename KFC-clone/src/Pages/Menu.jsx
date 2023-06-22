import SimpleSidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import AirbnbCard from "../components/Menu-items";
const Menu=()=>{
    return <>
    <Navbar/>
  <div  style={{display:"flex"}} >
    <div className="hidden lg:flex">
<SimpleSidebar />
</div>
<AirbnbCard/>
  </div>
    
    
    </>

}

export default Menu;