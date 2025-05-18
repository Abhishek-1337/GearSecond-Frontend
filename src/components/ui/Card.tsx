import ShareIcon from "../icons/ShareIcon"
import TrashIcon from "../icons/TrashIcon"

const Card = () => {
  return (
    <div className="max-w-60 h-80 rounded-xl bg-white shadow-gray-300 shadow-md py-2 px-3">
        <div className="flex justify-between items-center">
            <h5>Project ideas</h5>
            <div className="flex gap-3">
              <ShareIcon size="md"/>
              <TrashIcon size="md"/>
            </div>
        </div>
    </div>
  )
}

export default Card
