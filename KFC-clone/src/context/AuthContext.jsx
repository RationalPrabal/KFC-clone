import React from "react";
import { createContext } from "react";
import "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [user, setUser] = React.useState(null);
  function getUserId() {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuth(true);
      setUserId(user.phoneNumber);
      getUserData(user.phoneNumber);
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
    signOut(auth);
  };
  return (
    <div>
      <AuthContext.Provider
        value={{ isAuth, setAuth, LogoutUser, getUserId, user }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
