import React, { useState } from "react";

//components
import HomePage from "./HomePage/HomPage";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, title: "hat", color: "primary", col: "3" },
    { id: 2, title: "jakets", color: "success", col: "3" },
    { id: 3, title: "T-shirt", color: "warning", col: "3" },
    { id: 4, title: "jens", color: "info", col: "5" },
    { id: 5, title: "jens", color: "danger", col: "5" },
  ]);
  return <HomePage items={items} />;
}
