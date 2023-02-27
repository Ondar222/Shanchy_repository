import React from "react";
import { FaSearch } from "react-icons/fa/index.js";
import { observer } from "mobx-react-lite";
import searchQuery from "../../../store/search-query";

const HeaderSearchField = observer(() => {
  return (
    <div className="header__service__search">
      <input
        type="text"
        placeholder="Поиск"
        onChange={(e) => searchQuery.search(e.target.value)}
        className="header__service__search-input"
        
      />

      <a href="/search">
        <FaSearch
          onClick={(e) => {
            searchQuery.fetchPosts(searchQuery.query);
          }}
          className="icon_search"
        />
      </a>
    </div>
  );
});

export default HeaderSearchField;
