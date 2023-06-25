import { Button, Image, GridItem, Text, useToast, Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { Spinner } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
export default function SocialProfileWithImageHorizontal({
  image,
  price,
  name,
  id,
  quant,
}) {
  const [l, sl] = React.useState(false);
  const { user, userId, setUser } = useContext(AuthContext);
  const toast = useToast();
  const Delete = async (id) => {
    sl(true);
    const newUserCart = user?.cart.filter((el) => {
      return el.id !== id;
    });
    await axios
      .patch(`https://thin-fan-waiter.glitch.me/users/${userId}`, {
        cart: newUserCart,
      })
      .then(() => {
        toast({
          title: "Product removed successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        sl(false);
        setUser({ ...user, cart: newUserCart });
      })
      .catch((err) => {
        sl(false);
        toast({
          title: "Can not remove item",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleSub = async (id) => {
    sl(true);
    const newUserCart = user?.cart.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quant: el.quant - 1,
        };
      } else return el;
    });
    await axios
      .patch(`https://thin-fan-waiter.glitch.me/users/${userId}`, {
        cart: newUserCart,
      })
      .then(() => {
        setUser({ ...user, cart: newUserCart });
      });

    sl(false);
  };

  const handleAdd = async (id) => {
    sl(true);
    const newUserCart = user?.cart.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quant: el.quant + 1,
        };
      } else return el;
    });
    await axios
      .patch(`https://thin-fan-waiter.glitch.me/users/${userId}`, {
        cart: newUserCart,
      })
      .then(() => {
        setUser({ ...user, cart: newUserCart });
      });

    sl(false);
  };

  return l ? (
    <Spinner ml="50" />
  ) : (
    <Box boxShadow={"lg"} mt={"10"} padding={"4"} fontWeight={"bold"}>
      <GridItem w="100%" mt="10">
        <div className="grid sm:flex ">
          <div className="flex  justify-between">
            <Image w="50%" src={image} />
            <Text>{name}</Text>
          </div>
          <div className="flex mt-4 sm:mt-0  items-start">
            <div className="w-[200px] ">
              <Button disabled={quant === 1} onClick={() => handleSub(id)}>
                -
              </Button>
              <Button border={"3px solid white"}>{quant}</Button>
              <Button border={"3px solid white"} onClick={() => handleAdd(id)}>
                +
              </Button>
            </div>
            <div>₹{price * quant}</div>
          </div>
        </div>
      </GridItem>
      <Button
        w={"100px"}
        m="auto"
        colorScheme={"red"}
        onClick={() => Delete(id)}
      >
        Remove
      </Button>
    </Box>
  );
}
