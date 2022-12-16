import WithSubnavigation from "../components/Navbar";
import { Img } from "@chakra-ui/react";
import NationalOffers from "../components/NationalOffers";
const Deals=()=>{
    return (
        <div>
<WithSubnavigation/>
<Img mt="10" src="https://i.ibb.co/nnC4RGZ/Screenshot-20221216-173539.png"/>
<NationalOffers/>
</div>
    )
}

export {Deals}