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

const updateFunctionalStatus = async (status, id) => {
  try {
    const response = await axios({
      method: "put",
      data: { functional_status: status },
      url: `${BASE_URL}/loocafe/modify-functional-status/${id}`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateSupervisor = async (data, id) => {
  try {
    const response = await axios({
      method: "put",
      data: data,
      url: `${BASE_URL}/supervisor/update-supervisor/${id}`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    alert("Supervisor updated successfully");
  } catch (error) {
    alert(error.message);
  }
};

const assignLoocafe = async (id, supervisorId) => {
  try {
    const res = await axios({
      method: "put",
      url: `${BASE_URL}/supervisor/assign-loocafe/${supervisorId}`,
      data: { loocafeID: id },
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    alert(res.data.data.message);
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

const updateKyc = async (data, id) => {
  try {
    const response = await axios({
      method: "put",
      data: data,
      url: `${BASE_URL}/kyc/update-kyc/${id}`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    alert("Updated successfully");
  } catch (error) {
    alert(error.message);
  }
};

export {
  LoginAdmin,
  updateKyc,
  addKycForm,
  addSupervisor,
  updateSupervisor,
  updateFunctionalStatus,
  assignLoocafe,
};
