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
    "sm": "px-2 py-1 text-md",
    "md": "px-5 py-2 text-lg",
    "lg": "px-8 py-3 text-xl",
}

const defaultStyle = "cursor-pointer px-3 py-3 rounded-md leading-2";

const Button = (props: Props) => {
  return (
    <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeMap[props.size]} ${props.additionalStyles} hover:scale-105 transition-all`} onClick={props.onClick}> 
        <div className="flex gap-2 items-center">
          {props.startIcon && props.startIcon}
          {props.text}
        </div>
    </button>
  )
}

export default Button
