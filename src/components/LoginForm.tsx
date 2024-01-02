"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data========", data);
    // Add your authentication logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="desc">Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input {...field} type="email" className="form_input" />
          )}
        />
        <p className="error_text">{errors.email?.message}</p>
      </div>

      <div>
        <label className="">Password:</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input type="password" {...field} className="form_input" />
          )}
        />
        <p className="error_text">{errors.password?.message}</p>
      </div>

      <div>
        <label className="">Confirm Password:</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <input type="password" {...field} className="form_input" />
          )}
        />
        <p className="error_text">{errors.confirmPassword?.message}</p>
      </div>
      <button className="black_btn mt-10" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
