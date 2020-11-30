import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("./api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <h1>Hola Platzi!</h1>
      {productList.map((product, index) => (
        <div key={index}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
