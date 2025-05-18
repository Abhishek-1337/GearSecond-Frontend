interface Props {
  title: string;
  type: string;
  placeholder?: string;
  additionalStyles?: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  type,
  placeholder='',
  additionalStyles='',
  id,
  onChange
}: Props) => {
  return (
    <input 
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
