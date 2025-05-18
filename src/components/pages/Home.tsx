import { useState } from "react";
import Sidebar from "../ui/Sidebar";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import FileIcon from "../icons/FileIcon";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<{name: string}>({name: "document"});
  const [fileName, setFileName ] = useState<string>("Filename");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fileHandlerFn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    if(inputElement ){
        if(inputElement.files && inputElement.files.length > 0) {
          const file = inputElement.files[0];
          let filename;
          if(file.name.length > 14) {
            const prefix = file.name.slice(0,6);
            const suffix = file.name.slice(-5);

            filename = prefix + "..." +suffix;
          }
          setFileName(filename);
        }
    }
  }

  return (
    <div className="bg-gray-200 h-screen w-full flex">
      {
        isModalOpen && (
          <Modal onClose={ setIsModalOpen }>
            <div className="px-10 py-6">
              <div className="mb-6">
                <label className="font-semibold">Brain title : </label>
                <Input 
                type="text" 
                title="title" 
                placeholder="Give a title to remember" 
                id="title_input" 
                onChange={(e) => {}}
                additionalStyles="focus:outline-blue-500 focus:outline border border-gray-400 px-2 py-1 rounded-lg min-w-60 max-w-65"
                />
              </div>
              <div>
              <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
              {
                selectedItem.name === "document" && (
                <div className="flex items-center gap-3 justify-start min-w-max">
                  <label htmlFor="file_input" className="text-gray-600 font-semibold rounded-lg border border-gray-900 px-2 text-sm leading-6 flex items-center gap-2">
                    <FileIcon size="md"/>
                    Choose file 
                  </label>
                  <p className="text-sm">: {fileName}</p>
                  <Input 
                  type="file" 
                  id="file_input" 
                  title="fileInput"
                  additionalStyles="text-xs rounded-xl px-2 py-1 border border-gray-900 max-w-40 absolute right-0 hidden"
                  onChange={fileHandlerFn}
                  />
                </div>
                )
              }

              {
                ["youtube", "tweet", "link"].some((item) => item === selectedItem.name) && (
                  <div className="w-full text-left">
                    <label className="font-semibold">Link : </label>
                    <Input 
                    type="link" 
                    title="tweet" 
                    id="tweet-link" 
                    placeholder= "Paste your link here." 
                    onChange={(e) => {}}
                    additionalStyles="focus:outline-blue-500 focus:outline border border-gray-400 px-2 py-1 rounded-lg min-w-60"
                    />
                  </div>
                )
              }
              </div>
            </div>
          </Modal>
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
            <div className="p-2 px-4 my-16">  
              <Card/>
            </div>
        </div>
    </div>
  )
}

export default Home
