import axios from "axios";
import { key, token } from "../Regex/Regex";

export const configure = () => {
  const token = localStorage.getItem(key);
  console.log(JSON.parse(localStorage.getItem(token)));
  return {
    headers: {
      Authorization: `Bearer ` + token,
      "Content-Type": "application/json",
    },
  };
};

export const createCart = async (id) => {
  let books = await axios.post(
    `http://localhost:4000/api/cart/createCart/${id}`,
    JSON.parse(localStorage.getItem(token)),
    configure()
  );
  //console.log(books);
  return books.data.data;
};
