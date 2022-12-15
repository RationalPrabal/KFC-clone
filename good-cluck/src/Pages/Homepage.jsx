import WithSubnavigation from "../components/Navbar";
import Carousel from "../components/carousel-home";
import { Categories } from "../components/categories";
import LargeWithAppLinksAndSocial from "../components/Footer";
const Home=()=>{
    return<div>
<WithSubnavigation/>
<Carousel/>
<Categories/>
<LargeWithAppLinksAndSocial/>
    </div>
}

export {Home}