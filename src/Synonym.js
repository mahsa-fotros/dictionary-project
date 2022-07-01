import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <div className="Synonym">
        <strong>Silmilars: </strong>

        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="eachOfSynonym">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
