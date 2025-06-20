import { useForm, FormProvider } from "react-hook-form"
import Button from "../components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/form/Input";
import { registerUser } from "../utils/api";
import ModalCanvas from "../components/ui/ModalCanvas";

const loginSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(16).required("Password is required")
}); 

export type loginSchemaType = yup.InferType<typeof loginSchema>;

const Login = () => {
  const methods = useForm<loginSchemaType>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: loginSchemaType) => {
    const res = await registerUser(data);
    console.log(res);
  }

  return (
    <div className="bg-yellow-50 h-screen flex justify-center items-center">
        <FormProvider {...methods}>
          <form className="bg-white rounded-lg shadow-md p-8 relative flex flex-col items-center" onSubmit ={methods.handleSubmit(onSubmit)}>
        <ModalCanvas/>
        <p className="text-2xl text-gray-800 font-semibold mb-6">Log in to Second Brain account</p>
          
          <Input id="email" label="Email" name="email" type="email" additionalStyles="ml-10"/>
          <Input id="password" label="Password" name="password" type="password"/>
          
          <Button text="Submit" size="sm" variant="primary" additionalStyles="w-[100%] text-center mt-4 hover:none"/>
        </form>
        </FormProvider>
    </div>
  )
}

export default Login
