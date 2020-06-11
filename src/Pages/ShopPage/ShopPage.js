import React, { useState } from "react";

//style
import "./shopPage.scss";

//component
import SHOP_DATA from "./ShopData";
import Colection from "../../Components/Colection/Colection";

const ShopPage = () => {
  //data
  const [shopData, setShopData] = useState(SHOP_DATA);

  return (
    <div className="container">
      {shopData.map((data) => (
        <Colection key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ShopPage;
