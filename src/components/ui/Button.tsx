import { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface Props {
    variant: Variant;
    startIcon?: ReactNode;
    endIcon?: never;
    text?: string,
    size: "sm" | "md" | "lg";
    onClick?: () => void;
    additionalStyles?: string;
}

const variantStyle = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-300 text-blue-900 outline-none"
}

const sizeMap = {
    "sm": "px-1 py-1 text-md",
    "md": "px-5 py-2 text-lg",
    "lg": "px-7 py-3 text-xl",
}

const defaultStyle = "cursor-pointer px-3 rounded-md";

const Button = (props: Props) => {
  return (
    <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeMap[props.size]} ${props.additionalStyles} transition-all text-sm`} onClick={props.onClick}> 
        <div className="flex gap-2 items-center justify-center">
          <div>{props.startIcon && props.startIcon}</div>
          <div>{props.text}</div>
        </div>
    </button>
  )
}

export default Button
