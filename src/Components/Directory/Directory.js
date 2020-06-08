import React, { useState } from "react";

//style
import { Container, Row } from "react-bootstrap";
import "./Directory.scss";
//component
import MenuItem from "../MenuItem/MenuItem";

export default function () {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      col: "3",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      col: "3",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      col: "3",
      linkUrl: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      col: "5",
      linkUrl: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      col: "5",
      linkUrl: "shop/mens",
    },
  ]);
  return (
    <Container>
      <Row className="justify-content-center">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}
