import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./api";
import Error from "./components/Error/Error";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { Hourglass } from "react-loader-spinner";

function App() {
  const [photos, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSubmit = async (query) => {
    try {
      setPhoto([]);
      setError(false);
      setQuery(query);
      setPage(1);
      setLoading(true);
      const result = await fetchPhotos(query, 1);
      setPhoto(result.data.results);
      setTotalPhotos(result.data.total);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchMorePhotos = async (searchQuery, pageNum) => {
    try {
      setError(false);
      setLoading(true);
      const fetchedPhotos = await fetchPhotos(searchQuery, pageNum);
      setPhoto((prevPhotos) => [...prevPhotos, ...fetchedPhotos.data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMorePhotos(query, nextPage);
  };

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearchSubmit} />
      {photos?.length > 0 && (
        <ImageGallery photos={photos} onImageClick={handleImageClick} />
      )}
      {photos?.length == 0 && <p className="zero">No photos...</p>}
      {loading && (
        <div className="loader-spinner">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />{" "}
        </div>
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
      {photos.length > 0 && !loading && totalPhotos > photos.length && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {error && <Error />}
    </div>
  );
}

export default App;
