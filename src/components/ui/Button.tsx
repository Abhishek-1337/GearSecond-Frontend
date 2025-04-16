import React from "react";

type Variant = "primary" | "secondary";

interface Props {
    variant: Variant;
    startIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    endIcon?: never;
    text?: string,
    size: "sm" | "md" | "lg";
    onClick?: () => void;
}

const variantStyle = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-400 text-blue-900"
}

const sizeMap = {
    "sm": "px-3 py-1 text-md",
    "md": "px-6 py-2 text-lg",
    "lg": "px-9 py-3 text-xl",
}

const defaultStyle = "px-3 py-1 border-2 rounded-md";

const Button = (props: Props) => {
  return (
    <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeMap[props.size]}`}> 
        <div className="flex items-center">
          {props.startIcon && <props.startIcon/>}
          {props.text}
        </div>
    </button>
  )
}

export default Button
