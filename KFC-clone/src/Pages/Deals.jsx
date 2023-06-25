import Navbar from "../components/Navbar";
import { Img } from "@chakra-ui/react";
import NationalOffers from "../components/NationalOffers";
import LargeWithAppLinksAndSocial from "../components/Footer";
const Deals = () => {
  return (
    <div>
      <Navbar />
      <Img
        mt="10"
        src="https://i.ibb.co/nnC4RGZ/Screenshot-20221216-173539.png"
      />
      <NationalOffers />
      <LargeWithAppLinksAndSocial />
    </div>
  );
};

export { Deals };
