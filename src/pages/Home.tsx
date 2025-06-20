import { useEffect, useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import { GetAllContent } from "../utils/api"
import AddContentModal from "../components/ui/AddContentModal";
import { useNavigate } from "react-router-dom";

interface Content{
  type: string;
  title: string;
  link: string;
  userId: string;
}

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [contents, setContents] = useState<Content[]>([]); 
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }
  },[]);

  const fetchAllContent = async () => {
    try{
      const res = await GetAllContent();
      console.log(res);
      const updatedContent = res.contents.map((content) => {
        if(content.type === "tweet") {
          content.link = content.link.split('/')[content.link.split('/').length-1];
        // setContents([ ...res.contents, link: tweetId]);
          return content
        }
      })
      setContents(res.contents);
    }
    catch(ex){
      console.log(ex);
    }
  }

  useEffect(() => {
    fetchAllContent();
  }, []);

  console.log(contents.length);
  return (
    <div className="bg-gray-200 h-screen w-full flex">
      
      {
        isModalOpen && (
          <AddContentModal setIsModalOpen={setIsModalOpen}/>
        )
      }
        <Sidebar/>  
        <div className="h-full w-full p-7">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">All Notes</h2>
            <div className="flex gap-2 justify-end">
              <Button text="Share" variant="primary" size="md" startIcon={<ShareIcon size="md"/>}/>
              <Button text="Add Content" variant="secondary" size="md" startIcon={<PlusIcon size="md"/>} onClick={() => setIsModalOpen(true)}/>
            </div>
          </div>
          <div className="p-2 px-4 my-16 flex gap-6">  
            {
            contents.length > 0 && (
              contents.map((content) => <Card key={`${content.title + content.userId}`} link={content.link} type={content.type} title={content.title}/>)
            )}
          </div>
        </div>
    </div>
  )
}

export default Home
