import React from "react";

//style
import "./Colection.scss";

//component

const Colection = ({ data }) => {
  console.log(data.items);
  return (
    <div className="shop_menu">
      <h1>{data.title}</h1>
      {data.items
        .filter((items, idx) => idx < 4)
        .map((item) => (
          <div>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Colection;
