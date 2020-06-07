import React from "react";

//style
import { Col } from "react-bootstrap";

export default function ({ item }) {
  return (
    <Col className="box" lg={`${item.col} bg-${item.color}`}>
      <div className="box-text">
        <h1 className="box-title">{item.title}</h1>
        <span className="shop-now">shop Now</span>
      </div>
    </Col>
  );
}
