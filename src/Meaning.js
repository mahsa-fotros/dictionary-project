import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Examples: </strong>
              <em className="opacity-75">{definition.example}</em>

              <Synonym synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
