import React from "react";

//style
import "./ColectionItem.scss";

const ColectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="colection-item">
      <div
        className="colection-bg"
        style={{ backgroundImage: `url(${imageUrl}` }}
      ></div>
      <div className="colection-text">
        <p>{name}</p>
        <p>{`${price} $`}</p>
      </div>
    </div>
  );
};

export default ColectionItem;
