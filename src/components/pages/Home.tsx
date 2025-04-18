import Sidebar from "../ui/Sidebar";
import Button from "../ui/Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import Card from "../ui/Card";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen w-full flex">
        <Sidebar/>  
        <div className="h-full w-full p-7">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">All Notes</h2>
              <div className="flex gap-2 justify-end">
                <Button text="Share" variant="primary" size="md" startIcon={<ShareIcon size="md"/>}/>
                <Button text="Add Content" variant="secondary" size="md" startIcon={<PlusIcon size="md"/>}/>
              </div>
            </div>
            <div className="p-2 px-4 my-16">
              <Card/>
            </div>
        </div>
    </div>
  )
}

export default Home
