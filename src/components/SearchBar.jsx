import { useState } from "react";


export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <input
      type="text"
      className="form-control mb-3 "
      placeholder= "cerca"
      value={query}
      onChange={handleChange}
    />
  );
}

