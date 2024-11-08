// import "./App.css";
import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = useModal();

  return (
    <>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>
      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title={"Login"}
      >
        <form>
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contrasena" />
        </form>
      </Modal>

      <Modal
        isOpen={isOpenChatModal}
        closeModal={closeChatModal}
        title={"Chat"}
      >
        <p>
          Hola!! <b>- Luis</b>
        </p>
        <p>
          Que hace :v <b>- Maria</b>
        </p>
      </Modal>

      <GalleryModal
        isOpen={isOpenGalleryModal}
        closeModal={closeGalleryModal}
      />
    </>
  );
}

export default App;
