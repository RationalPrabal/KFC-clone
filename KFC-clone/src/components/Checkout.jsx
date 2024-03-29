import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Text,
  Grid,
  GridItem,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import InitialFocus from "./Modal-National";

import Loader from "./loader";
const Checkout = ({ amount, product, loader }) => {
  const [location, setLocation] = React.useState("checkout");

  return loader ? (
    <Loader />
  ) : (
    <div className="w-[100%] sm:w-[400px] border-[4px] border-red-600 mt-[10px] shadow-lg">
      <Text fontWeight={"700"}>Details</Text>
      <Grid
        height={"50"}
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        <GridItem fontWeight={"700"}>Total Cart Amount</GridItem>
        <GridItem fontWeight={"700"}>₹{Math.floor(amount)}</GridItem>
        <GridItem fontWeight={"700"}>GST</GridItem>
        <GridItem fontWeight={"700"}>₹{(amount * 0.06).toFixed(2)} </GridItem>
        <GridItem fontWeight={"700"}>Grand Total</GridItem>
        <GridItem fontWeight={"700"}>
          ₹{Math.floor(amount + amount * 0.06)}
        </GridItem>
      </Grid>

      <InitialFocus location={location} />
    </div>
  );
};

export default Checkout;
