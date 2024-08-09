import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      appElement={document.getElementById("root")}
      className={css.modal}
      overlayClassName={css.overlay}>
      <div className={css.modalContent}>
        <img src={image.urls.full} alt={image.description} />
        <div className={css.descBox}>
          <p className={css.like}>Likes: {image.likes}</p>
          <p className={css.author}>Author: {image.user.username}</p>
          <a href={image.links.download} className={css.link} target="_blank">
            {" "}
            Download{" "}
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
