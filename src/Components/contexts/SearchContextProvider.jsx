import React from "react";
import SearchContext from "./SearchContext";
import { useState } from "react";
const SearchContextProvider = ({ children }) => {
  const [searchTxt, setsearchTxt] = useState("");

  return (
    <SearchContext.Provider value={{ searchTxt, setsearchTxt }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
