import React from "react";

//style
import "./HompePage.scss";
import { Container } from "react-bootstrap";

//components
import MenuItem from "./menuItem/MenuItem";

export default function Hompage({ items }) {
  return (
    <Container>
      <MenuItem items={items} />
    </Container>
  );
}
