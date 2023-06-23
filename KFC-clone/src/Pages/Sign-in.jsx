import { Button, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Modal_SignIn from "../components/Modal-SignIn";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Profile from "../components/Profile";
import Orders from "../components/Orders_History";
import Addresses from "../components/Addresses";
export default function SignIn() {
  const { user, isAuth } = useContext(AuthContext);
  const [number, setNumber] = React.useState();
  const [location, setLocation] = React.useState("order");

  return (
    <>
      <Navbar />

      {isAuth ? (
        <div className="flex">
          <div className="bg-black w-[400px] text-white rounded-sm space-y-6 pb-12">
            <div className="text-left w-[60%] m-auto">
              <img src="https://online.kfc.co.in/static/media/Strips.4f336307.svg" />
            </div>
            <div className="text-left w-[60%] m-auto">
              <p className="font-bold text-2xl">Welcome</p>
              <p className="font-bold text-2xl">{user.mobile}</p>
            </div>
            <div className="font-medium text-sm text-stone-500 text-left w-[60%] m-auto space-y-2 cursor-pointer">
              <p onClick={() => setLocation("profile")}>Profile</p>
              <p onClick={() => setLocation("order")}>Order History</p>
              <p onClick={() => setLocation("address")}>Addresses</p>
            </div>
            <div className="text-left w-[60%] m-auto">
              <button className="rounded-2xl text-sm border-white border-2 px-6 py-2.5">
                Sign Out
              </button>
            </div>
          </div>

          {location === "order" ? (
            <Orders />
          ) : location === "profile" ? (
            <Profile />
          ) : (
            <Addresses />
          )}
        </div>
      ) : (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack
            spacing={4}
            w={{ base: "100%", sm: "50%" }}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
            </Heading>

            <Input
              type={"number"}
              placeholder="*Phone Number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            ></Input>
            <Text fontSize={"10"}>
              By “logging in to KFC”, you agree to our Privacy Policy and Terms
              & Conditions.
            </Text>
            <Modal_SignIn number={number} />

            <Text>or</Text>
            <Link to={"/menu"}>
              <Button> Skip, Continue As Guest</Button>
            </Link>
          </Stack>
        </Flex>
      )}
    </>
  );
}
