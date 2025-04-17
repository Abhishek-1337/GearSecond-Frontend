import Sidebar from "../ui/Sidebar";
import Button from "../ui/Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen w-full flex">
        <Sidebar/>  
        <div className="h-full w-full p-4">
            <div className="text-end">
                <div className="flex gap-2 justify-end">
                  <Button text="Share" variant="primary" size="md" startIcon={<ShareIcon size="md"/>}/>
                  <Button text="Add Content" variant="secondary" size="md" startIcon={<PlusIcon size="md"/>}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
