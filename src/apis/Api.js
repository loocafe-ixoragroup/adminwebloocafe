import axios from "axios";
import { useParams } from "react-router";
import Cookies from "universal-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const cookies = new Cookies();

const LoginAdmin = async ({ email, password }) => {
  try {
    const data = await axios.post(`${BASE_URL}/auth/login`, {
      username: email,
      password,
    });
    cookies.set("token", data.data.token, { path: "/" });
    window.location.replace("/dashboard");
  } catch (error) {
    alert("Invalid credentials");
  }
};

const addKycForm = async (formData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/kyc/add-kyc`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    // console.log(response);
    alert(response.data.message);
    window.location.replace("/dashboard");
  } catch (error) {
    alert(error.message);
    window.location.replace("/kyc");
  }
};

const addSupervisor = async (formData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/supervisor/add-supervisor`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
  }
};

const getKycData = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/loocafe/get-kyc-details/${id}`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    // const data = await response.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { LoginAdmin, addKycForm, addSupervisor, getKycData };
