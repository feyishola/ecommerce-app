import React, { useState } from "react";
import Modal from "react-modal";
import Icons from "../icons/icons";



// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto"
//   },
// };

function ModalButton({form,title, backgroundColor="green"}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={setModalOpen} title={title} style={{height:"35px", width:"35px", background:backgroundColor, fontSize:"30px", color:"white"}}>{"+"}</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        // style={customStyles}
      >
        
        <div>{form}</div>

        <button onClick={() => setModalOpen(false)} onSubmit={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ModalButton;

