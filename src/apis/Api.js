import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
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

export { LoginAdmin, addKycForm, addSupervisor };
