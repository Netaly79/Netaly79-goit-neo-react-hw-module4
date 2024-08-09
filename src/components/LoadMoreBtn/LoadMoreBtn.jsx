import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={css.loadMore} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
