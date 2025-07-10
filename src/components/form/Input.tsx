import { useEffect } from "react";
import { useFormContext } from "react-hook-form"

const Input = ({id, label, name, type, additionalStyles=""}) => {
  const { register, formState, formState: { errors }, reset } = useFormContext();

  useEffect(() => {
    if(formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  
  return (
    <div className="mb-4">
        <label htmlFor={id} className="text-sm font-semibold">{ label }</label>
        <input {...register(name)} id={id} type={type} className={`focus:outline-blue-500 focus:outline border border-gray-400 px-2 py-1 rounded-lg min-w-60 max-w-65 text-sm ml-4 ${additionalStyles}`}/>
        { errors[name] && <p className="text-[0.5rem] text-red-500">{errors[name].message as string}</p> }
    </div>
  )
}

export default Input
