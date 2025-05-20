import DocumentIcon from "../../icons/DocumentIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import LinkIcon from "../../icons/LinkIcon";
import TagIcon from "../../icons/TagIcon";
import SidebarItem from "./SidebarItem"
import LogoIcon from "../../icons/LogoIcon";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-[20rem] h-screen px-4 py-4">
        <div className="flex flex-col items-center pb-2 mb-8">
          <LogoIcon size="xl"/>
          <span className="font-logo font-semibold">GEARSECOND</span> 
        </div>
        <div className="flex flex-col gap-3">
        <SidebarItem icon={<YoutubeIcon size="lg"/>} text="Videos"/>
        <SidebarItem icon={<DocumentIcon size="lg"/>} text="Documents"/>
        <SidebarItem icon={<TwitterIcon size="lg"/>} text="Twitter"/>
        <SidebarItem icon={<LinkIcon size="lg"/>} text="Links"/>
        <SidebarItem icon={<TagIcon size="lg"/>} text="Tags"/>
        </div>
    </div>
  )
}

export default Sidebar
