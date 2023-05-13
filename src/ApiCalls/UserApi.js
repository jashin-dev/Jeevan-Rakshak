import axios from "axios";
import { useEffect, useState } from "react";

const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState();
  const [history, setHistory] = useState();

  const getUser = async () => {
    try {
      const res = await axios.get("/user/info", {
        headers: {
          Authorization: token,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getHistory = async () => {
    try {
      const res = await axios.get("/user/history", {
        headers: {
          Authorization: token,
        },
      });

      setHistory(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
      getHistory();
    }
  }, [token]);

  return { user: [user, setUser], history: [history, setHistory] , isLogged : [isLogged , setIsLogged] };
};

export default UserApi;
