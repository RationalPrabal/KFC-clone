import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";
import SocialProfileWithImageHorizontal from "../components/Single-Cart";
import Empty from "../components/empty-cart";
import { AuthContext } from "../context/AuthContext";
const Cart = () => {
  const { user } = useContext(AuthContext);
  const [amount, setAmount] = React.useState(0);

  const getTotal = () => {
    let total;
    if (user?.cart.length !== 0) {
      total = user?.cart.reduce(function (ac, el) {
        return ac + el.price * el.quant;
      }, 0);
    }
    setAmount(total);
  };

  React.useEffect(() => {
    getTotal();
  }, [user?.cart]);

  return (
    <>
      <Navbar />
      <Box mt="10" ml="20" textAlign={"left"}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" />
        <Text fontSize={"30px"} fontWeight="700">
          MY CART
        </Text>
      </Box>
      {user?.cart.length ? (
        <div className="w-[80%] sm:w-[70%] m-auto ">
          <Grid>
            {user.cart?.map((el) => (
              <SocialProfileWithImageHorizontal
                image={el.image}
                price={el.price}
                name={el.name}
                setAmount={setAmount}
                id={el.id}
                quant={el.quant}
              />
            ))}
          </Grid>
          <Checkout product={user.cart} amount={amount} />
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Cart;
