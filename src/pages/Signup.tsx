import { useForm, FormProvider } from "react-hook-form"
import Button from "../components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/form/Input";

const registerSchema = yup.object({
  username: yup.string().min(3).max(15).required("Username is required."),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(16).required("Password is required")
}); 

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;

const Signup = () => {
  const methods = useForm<RegisterSchemaType>({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log(data);
  }

  return (
    <div className="bg-yellow-50 h-screen flex justify-center items-center">
        <FormProvider {...methods}>
          <form className="bg-white rounded-lg shadow-md p-8 relative flex flex-col items-center" onSubmit ={methods.handleSubmit(onSubmit)}>
        <div className="rounded-full bg-yellow-500 w-17 h-17 absolute -top-7 -right-7 shadow-lg">
          <div className="w-full h-1/2 bg-white rounded-b-full translate-x-3 translate-y-1/5 rotate-230 border-2 border-white shadow-lg"></div>
        </div>
        <p className="text-2xl text-gray-800 font-semibold mb-6">Create your Second Brain account</p>
          
          <Input id="username" label="Username" name="username" type="text"/>
          <Input id="email" label="Email" name="email" type="email" additionalStyles="ml-10"/>
          <Input id="password" label="Password" name="password" type="password"/>
          
          <Button text="Submit" size="sm" variant="primary" additionalStyles="w-[90%] text-center"/>
        </form>
        </FormProvider>
    </div>
  )
}

export default Signup
