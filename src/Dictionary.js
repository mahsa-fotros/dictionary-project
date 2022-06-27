import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleRespnse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
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
      <h1 className="text-center mt-5">What word do you want to look up?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleKeywordSearch}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
