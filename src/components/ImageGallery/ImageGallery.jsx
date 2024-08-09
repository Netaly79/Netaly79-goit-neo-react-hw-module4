import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.photoList}>
      {photos?.map((photo) => (
        <li
          key={photo.id}
          className={css.photo}
          onClick={() => onImageClick(photo)}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
