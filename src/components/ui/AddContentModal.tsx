import Modal from "./Modal";
import Dropdown from "./Dropdown";
import Input from "./Input";
import FileIcon from "../../icons/FileIcon";
import { useState } from "react";
import { postContent } from "../../utils/api";
import Button from "./Button";

interface Props {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContentModal = ({setIsModalOpen}: Props) => {
  const [selectedItem, setSelectedItem] = useState<{name: string}>({name: "document"});
  const [fileName, setFileName ] = useState<string>("Filename");
  const [ link, setLink ] = useState<string>("");
  const [ title, setTitle ] = useState<string>("");

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

  const handleSubmit = () => {
    if( !title || !link ) {
      return;
    }
    postContent({title, link, type: selectedItem.name });
    setSelectedItem({name: ""});
    setLink("");
    setTitle("");
  }
  return (
    <Modal onClose={ setIsModalOpen }>
            <div className="px-10 py-6">
              <div className="mb-6">
                <label className="font-semibold">Brain title : </label>
                <Input 
                type="text" 
                title="title" 
                placeholder="Give a title to remember" 
                id="title_input" 
                onChange={(e) => { setTitle(e.target.value) }}
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
                    onChange={(e) => {
                      setLink(e.target.value); 
                    }}
                    additionalStyles="focus:outline-blue-500 focus:outline border border-gray-400 px-2 py-1 rounded-lg min-w-60"
                    />
                  </div>
                )
              }
              </div>
            </div>

            <div className="mt-4 py-2 justify-end flex gap-4">
                <Button size="sm" variant="primary" text="Submit" onClick={handleSubmit}/>
                <Button size="sm" variant="primary" text="Cancel" additionalStyles="bg-red-600" onClick={() => setIsModalOpen(false)}/>
              </div>

          </Modal>
  )
}

export default AddContentModal
