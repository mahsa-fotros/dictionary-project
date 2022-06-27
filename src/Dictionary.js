import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleRespnse(response) {
    console.log(response.data[0].meanings);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleRespnse);
  }
  function handleKeywordSearch(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleKeywordSearch}
        />
      </form>
    </div>
  );
}
