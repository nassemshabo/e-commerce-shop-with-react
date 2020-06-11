import React from "react";

//style
import "./Colection.scss";

//component
import ColectionItem from "../ColectionItem/ColectionItem";

const Colection = ({ data }) => {
  return (
    <div className="shop_menu">
      <h1>{data.title}</h1>
      <div className="colection-item-container">
        {data.items
          .filter((items, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <ColectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default Colection;
