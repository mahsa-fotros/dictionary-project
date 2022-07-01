import React from "react";
import "./Meaning.css";
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
              <div className="definition">{definition.definition}</div>
              <strong>Examples: </strong>
              <div className="example">{definition.example}</div>

              <Synonym synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
