import React from "react";
import { withRouter } from "react-router-dom";

//style
import "./MenuItem.scss";
const MenuItem = ({ item, history, match }) => {
  return (
    <div
      className={`box ${item.col}`}
      style={{ backgroundImage: `url(${item.imageUrl}` }}
    >
      <div
        className="box-text"
        onClick={() => history.push(`${match.url}${item.linkUrl}`)}
      >
        <h1 className="box-title">{item.title}</h1>
        <span className="shop-now">shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
