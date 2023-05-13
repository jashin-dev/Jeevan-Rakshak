import axios from "axios";
import { createContext, useEffect, useState } from "react";
import UserApi from "../ApiCalls/UserApi";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshToken = async () => {
    try {
      const res = await axios.get("/user/refreshToken");
      setToken(res.data.accessToken);

      setTimeout(() => {
        refreshToken();
      }, 10 * 60 * 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      refreshToken();
    }
  }, [token]);

  const value = {
    token: [token, setToken],
    userApi: UserApi(token),
    isLoading: [isLoading, setIsLoading],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
