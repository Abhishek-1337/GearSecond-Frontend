import { Ref } from "react";

interface Props {
  title: string;
  type: string;
  placeholder?: string;
  additionalStyles?: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reference?: Ref<HTMLInputElement | null>;
}

const Input = ({
  title,
  type,
  placeholder='',
  additionalStyles='',
  id,
  onChange,
  reference
}: Props) => {
  return (
    <input 
    ref={reference}
    type={type} 
    name={title} 
    id={id} 
    placeholder={placeholder} 
    className={additionalStyles}
    onChange={onChange}
    />
  )
}

export default Input
