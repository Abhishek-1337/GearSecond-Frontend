import Sidebar from "../ui/Sidebar";
import Button from "../ui/Button";
import ShareIcon from "../icons/ShareIcon";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen w-full flex">
        <Sidebar/>
        <div className="h-full w-full p-4">
            <div className="text-end">
                <Button text="Share" variant="primary" size="md" startIcon={ShareIcon}/>
            </div>
        </div>
    </div>
  )
}

export default Home
