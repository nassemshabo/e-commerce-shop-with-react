import React from "react";

//style
import { Col } from "react-bootstrap";
import "./MenuItem.scss";

export default function ({ item }) {
  return (
    <Col
      className="box"
      lg={`${item.col}`}
      style={{ backgroundImage: `url(${item.imageUrl}` }}
    >
      <div className="box-text">
        <h1 className="box-title">{item.title}</h1>
        <span className="shop-now">shop Now</span>
      </div>
    </Col>
  );
}
