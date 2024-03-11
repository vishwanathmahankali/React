import { useState } from "react";
import Modal from "./modal";
import "./modal.css";
export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          onClose={onClose}
          header={<h1>Customized Header</h1>}
          body={
            <div>
              <p>Customized Body</p>
            </div>
          }
          footer={<h2>Customized Footer</h2>}
        />
      )}
    </div>
  );
}
