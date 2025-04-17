import DocumentIcon from "../icons/DocumentIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-[20rem] h-screen px-4 py-4">
        <SidebarItem icon={<YoutubeIcon size="lg"/>} text="Videos"/>
        <SidebarItem icon={<DocumentIcon size="lg"/>} text="Documents"/>
    </div>
  )
}

export default Sidebar
