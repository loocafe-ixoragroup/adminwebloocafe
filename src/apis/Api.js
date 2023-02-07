import axios from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
const cookies = new Cookies();

const LoginAdmin = async ({ email, password }) => {
  try {
    const data = await axios.post(`${BASE_URL}/auth/login`, {
      username: email,
      password,
    });
    cookies.set("token", data.token, { path: "/" });
    Navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

export { LoginAdmin };
