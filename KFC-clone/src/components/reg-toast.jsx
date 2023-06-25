import { useToast, Button } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function ToastExample({ pin }) {
  const navigate = useNavigate();
  const toast = useToast();
  const { setAuth } = useContext(AuthContext);
  function onOTPVerify() {
    window.confirmationResult
      .confirm(pin)
      .then(async (res) => {
        const userData = {
          id: res.user.phoneNumber,
          mobile: res.user.phoneNumber,
        };
        axios
          .post("https://thin-fan-waiter.glitch.me/users", userData)
          .then((res) => setAuth(true))
          .catch((err) => console.log(err));
        toast({
          title: "Signin/Signup Successfull.",
          description: "You have been looged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/menu");
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }
  return (
    <Button disabled={pin.length !== 6} onClick={() => onOTPVerify()}>
      Submit
    </Button>
  );
}

export { ToastExample };
