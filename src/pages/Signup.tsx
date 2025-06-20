import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/form/Input";
import { registerUser } from "../utils/api";
import ModalCanvas from "../components/ui/ModalCanvas";

const registerSchema = yup.object({
  username: yup.string().min(3).max(15).required("Username is required."),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(16).required("Password is required")
}); 

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;

const Signup = () => {
  const navigate = useNavigate();
  const methods = useForm<RegisterSchemaType>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    const res = await registerUser(data);
    if(res?.error) {
      return;
    }
    localStorage.setItem("token", res.token);
    navigate("/");
  }

  return (
    <div className="bg-yellow-50 h-screen flex justify-center items-center">
        <FormProvider {...methods}>
          <form className="bg-white rounded-lg shadow-md p-8 relative flex flex-col items-center" onSubmit ={methods.handleSubmit(onSubmit)}>
        <ModalCanvas/>
        <p className="text-2xl text-gray-800 font-semibold mb-6">Create your Second Brain account</p>
          
          <Input id="username" label="Username" name="username" type="text"/>
          <Input id="email" label="Email" name="email" type="email" additionalStyles="ml-10"/>
          <Input id="password" label="Password" name="password" type="password"/>
          
          <Button text="Submit" size="sm" variant="primary" additionalStyles="w-[100%] mt-4 text-center"/>
        </form>
        </FormProvider>
    </div>
  )
}

export default Signup
