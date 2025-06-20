import {  ReactNode } from "react";

interface Props {
    icon: ReactNode;
    text: string;
}

const SidebarItem = (props: Props) => {
  return (
    <div className="w-full py-3 pl-6 flex text-sm rounded-lg gap-2 cursor-pointer border-transparent transition-all border-2 hover:border-blue-200 hover:scale-105">
        <span>
            {props.icon}
        </span>
        {props.text}
    </div>
  );
}

export default SidebarItem
