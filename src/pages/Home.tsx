import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  const handleShopNowClick = () => {
    alert("This button is for demonstration purposes only.");
  };

  return (
    <>
      <h1>Welcome to the Store!</h1>
      <p>Check out some of our popular products below.</p>
      <Button onClick={handleShopNowClick}>Shop Now</Button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginTop: "2em",
        }}
      >
        {products.map((prod) => (
          <Card key={prod.id} title={prod.title} image={prod.image} price={prod.price} />
        ))}
      </div>
    </>
  );
};
