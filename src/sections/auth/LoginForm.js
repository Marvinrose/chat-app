import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import { yupResolver } from "@hook-form/resolvers/yup";

const [showPassword, setShowPassword] = useState(false);
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "demotalk.com",
  password: "demo1234",
};
const LoginForm = () => {
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      LoginForm
    </FormProvider>
  );
};

export default LoginForm;
