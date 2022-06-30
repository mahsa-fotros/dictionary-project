import React from "react";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <div className="Synonym">
        <strong>Silmilars: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
