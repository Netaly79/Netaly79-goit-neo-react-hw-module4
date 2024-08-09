import { useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }

    const form = event.target;
    const searchStr = form.elements.search.value;
    onSubmit(searchStr);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
          className={css.searhString}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
