import ReactDOM from "react-dom";

const Backdrop = ({ setIsModalOpen }) => {
    return (
        <div 
        className="fixed w-screen h-[100vh] opacity-70 bg-black" 
        onClick={() => setIsModalOpen(false)}
        ></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className="bg-white fixed top-[35%] left-[40%] rounded-lg min-w-80 h-60 px-4 py-6 text-center">{props.children}</div>
    );
}

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  if(!portalElement) {
    return null;
  }
  return (
    <div>
        {ReactDOM.createPortal(<Backdrop setIsModalOpen={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </div>
  )
}

export default Modal
