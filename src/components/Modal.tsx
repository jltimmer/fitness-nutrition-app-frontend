import { ReactElement } from "react";

interface Props {
  content : ReactElement;
}

function Modal( {content} : Props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {content}
      </div>
    </div>
  )
}

export default Modal
