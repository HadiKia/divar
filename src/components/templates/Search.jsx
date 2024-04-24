import SearchIcon from "assets/icons/SearchIcon";
import { useQueryContext } from "hooks/useQueryContext";
import { useState } from "react";

// styles
import { formStyle } from "styles/SearchStyle";
import { createQueryObject } from "utils/helpers";

function Search() {
  const [search, setSearch] = useState("");
  const { setQuery } = useQueryContext();

  const searchHandler = (event) => {
    event.preventDefault();
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <form onSubmit={searchHandler} className={formStyle}>
      <button>
        <SearchIcon />
      </button>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو در همهٔ آگهی‌ها"
      />
    </form>
  );
}

export default Search;
