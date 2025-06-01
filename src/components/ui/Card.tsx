import ShareIcon from "../..//icons/ShareIcon"
import TrashIcon from "../../icons/TrashIcon"

interface Props {
  title: string;
  type: string;
  link: string;
}
const Card = ({ title, type, link }: Props) => {
  console.log(type);
  return (
    <div className="max-w-60 rounded-xl bg-white shadow-gray-300 shadow-md py-3 px-3">
        <div className="flex justify-between items-center mb-6">
            <h5 className="font-semibold">{ type }</h5>
            <div className="flex gap-3">
              <ShareIcon size="md"/>
              <TrashIcon size="md"/>
            </div>
        </div>
        <div className="flex flex-col gap-2">
          <iframe className="w-full rounded-lg" src={link} title="Average at Coding? But want 12 LPA+ Jobs | WATCH THIS to know HOW !!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm">{title}</p>
        </div>
    </div>
  )
}

export default Card
