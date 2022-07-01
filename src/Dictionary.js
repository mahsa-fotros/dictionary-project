import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleRespnse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search() {
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleRespnse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordSearch(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word do you want to look up?</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordSearch}
            />
          </form>
          <div className="hint">Suggested words: yoga, plant, sunset, ...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
