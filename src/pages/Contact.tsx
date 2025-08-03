import React from "react";
import { Button } from "../components/Button/Button";

export const Contact: React.FC = () => (
  <section>
    <h1>Contact Us</h1>
    <p>Email: <a href="mailto:noreply@example.com">noreply@example.com</a></p>
    <Button>Email Now</Button>
  </section>
);
