import { Dispatch, SetStateAction, useState } from "react";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

const modalDropdownItems = ["document","tweet", "youtube", "link"];

interface Props {
    selectedItem: { name: string },
    setSelectedItem: Dispatch<SetStateAction<{name: string}>>;
}

const Dropdown = ({selectedItem, setSelectedItem}: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
    <div className="mb-6 flex justify-end hover:outline hover:outline-blue-500 border-1 border-gray-400 px-4 py-1 rounded-lg self-start max-w-min">
        <div className="flex items-center gap-8 font-semibold text-gray-600" onClick={() => setIsOpen((prev) => !prev)}>
        {selectedItem.name}
        <ChevronDownIcon size="md"/> 
        </div>
        {
        isOpen && (
        <ul className="absolute bg-gray-200 min-w-60 rounded-lg top-27">
            {
            modalDropdownItems.map((item) => 
            <li 
            className="box-border cursor-pointer border-transparent border-2 border-b-gray-300 text-sm py-2 rounded-lg font-semibold hover:bg-gray-100 text-gray-600"
            onClick={() => { 
                setSelectedItem({name: item});
                setIsOpen(false);  
            }}
            >{item}</li>)
            }
        </ul>
        )
        }
    </div>
  )
}

export default Dropdown
