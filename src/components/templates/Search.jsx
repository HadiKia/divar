import SearchIcon from "assets/icons/SearchIcon";
import { useQueryContext } from "hooks/useQueryContext";
import { useEffect, useState } from "react";

// styles
import { formStyle } from "styles/SearchStyle";
import { createQueryObject } from "utils/helpers";

function Search() {
  const [search, setSearch] = useState("");
  const { query, setQuery } = useQueryContext();

  const searchHandler = (event) => {
    event.preventDefault();
    setQuery((query) => createQueryObject(query, { search }));
  };

  useEffect(() => {
    setSearch(query.search || "");
  }, [query]);

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
