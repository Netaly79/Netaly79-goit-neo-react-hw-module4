import css from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <div>
      <img src={photo.urls.small_s3} alt="" className={css.image} />
    </div>
  );
};

export default ImageCard;
