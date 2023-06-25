import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Empty = () => {
  const nav = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "80%",
        }}
      >
        <div>
          <Text fontWeight={"1000"} fontSize={{ base: "20", sm: "40" }}>
            YOUR CART IS EMPTY.
          </Text>
          <Text fontWeight={"1000"} fontSize={{ base: "20", sm: "40" }}>
            {" "}
            LET'S START AN ORDER!
          </Text>
          <Button
            onClick={() => nav("/menu")}
            bg={"tomato"}
            size={"lg"}
            mt="50"
            borderRadius={"20"}
          >
            Start Order
          </Button>
        </div>
        <div>
          <img
            style={{ width: "80%" }}
            src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
            alt="empty cart"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Empty;
