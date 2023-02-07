import React, { useState } from "react";
import { BlackButton, SimpleInput } from "../../components/form-fields";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginAdmin } from "../../apis/Api";

const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter valide email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    LoginAdmin({ email: data.email, password: data.password });
  };

  return (
    <div className="login_container">
      <h3>Admin Login</h3>
      <SimpleInput
        label={"Email:"}
        name={"email"}
        error={errors.email?.message}
        register={{ ...register("email") }}
        type={"email"}
      />
      <SimpleInput
        label={"Password:"}
        name={"password"}
        error={errors.password?.message}
        type={"password"}
        register={{ ...register("password") }}
      />
      <div className="btnDiv">
        <BlackButton
          name={"Login"}
          type={"submit"}
          handleClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default Login;
