import axios from "axios";
import { key, token } from "../Regex/Regex";
export const login = async (details) => {
  let userDetails = await axios.post(
    `http://localhost:4000/api/users/login`,
    details
  );
  console.log(userDetails.data.user);
  if (userDetails.status === 200 || userDetails.statusText === "OK") {
    localStorage.setItem(key, userDetails.data.token);
    localStorage.setItem(token, JSON.stringify(userDetails.data.user));
  }
  return userDetails;
};

export const signup = async (details) => {
  const user = await axios.post(
    `http://localhost:4000/api/users/createUser`,
    details
  );
  console.log(user);
};
