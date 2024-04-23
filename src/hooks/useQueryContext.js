import { useContext } from "react";
import { QueryContext } from "../context/QueryContext";

const useQueryContext = () => {
  const { query, setQuery } = useContext(QueryContext);
  return { query, setQuery };
};

export { useQueryContext };
