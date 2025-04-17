import {  ReactNode } from "react";

interface Props {
    icon: ReactNode;
    text: string;
}

const SidebarItem = (props: Props) => {
  return (
    <div className="w-full py-3 pl-6 flex rounded-lg gap-2 cursor-pointer">
        <span>
            {props.icon}
        </span>
        {props.text}
    </div>
  );
}

export default SidebarItem
