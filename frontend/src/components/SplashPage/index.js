import React from "react";
import { Modal } from '../../context/Modal'
import SplashPage from "./SplashPage";

function SplashPageModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)} className='splash-btn'>Start uploading today</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SplashPage />
          </Modal>
        )}
      </>
    );
  }

  export default SplashPageModal;

  