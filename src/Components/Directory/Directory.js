import React, { useState } from "react";

//style
import "./Directory.scss";
//component
import MenuItem from "../MenuItem/MenuItem";

const Directory = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      col: "box1",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      col: "box2",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      col: "box3",
      linkUrl: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      col: "box4",
      linkUrl: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      col: "box5",
      linkUrl: "shop/mens",
    },
  ]);
  return (
    <div className="container directory">
      <div className="home_menu">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
