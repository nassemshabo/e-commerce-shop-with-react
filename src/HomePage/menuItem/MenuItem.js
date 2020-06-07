import React from "react";

//style
import { Row } from "react-bootstrap";
import "./MenuItem.scss";
//component
import Item from "./../Items/Item";

export default function ({ items }) {
  console.log(items);
  return (
    <Row className="justify-content-center">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Row>
  );
}
