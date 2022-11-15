import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListForm from "./ListForm";

export default function Header({ newPostForm, toggleNewPostForm, filterTodo }) {
  let [searchFocus, toggleSearchFocus] = useState(false);
  let [searchInput, setSearchInput] = useState("");

  function handleSearchChange(searchInput) {
    setSearchInput(searchInput);
    filterTodo(searchInput);
  }

  function handleFormRequest(prev) {
    toggleNewPostForm(!prev);
  }

  return (
    <div className="header-container">
      <div className={searchFocus ? "search-focus" : "search-container"}>
        <FontAwesomeIcon
          icon={faSearch}
          className="fa-header-icons search-icon"
        />
        <input
          type="text"
          placeholder="search"
          className="search"
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => {
            toggleSearchFocus(true);
          }}
          onBlur={() => {
            toggleSearchFocus(false);
          }}
        />
      </div>
      <button
        className="new-btn"
        onClick={() => {
          handleFormRequest(newPostForm);
        }}
      >
        New
      </button>
    </div>
  );
}
