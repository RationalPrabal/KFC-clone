import React from "react";
import { createContext } from "react";
import "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import { Toast, useToast } from "@chakra-ui/react";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const toast = useToast();
  function getUserId() {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);

        setUserId(user.phoneNumber);
        getUserData(user.phoneNumber);
      }
    });

    return () => {
      unsubscribe();
    };
  }

  const getUserData = async (id) => {
    try {
      const res = await axios.get(
        `https://thin-fan-waiter.glitch.me/users/${id}`
      );
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const LogoutUser = () => {
    signOut(auth)
      .then(() => {
        setAuth(false);
        toast({
          title: "Successfully logged out",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return (
    <div>
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
          LogoutUser,
          getUserId,
          user,
          userId,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
