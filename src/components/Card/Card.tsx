import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  title: string;
  image: string;
  price: number;
}
export const Card: React.FC<CardProps> = ({ title, image, price }) => (
  <div className={styles.card}>
    <img src={image} className={styles.image} alt={title} />
    <div className={styles.details}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price}>${price}</div>
    </div>
  </div>
);
