import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const womens = Characters.filter((charater) => charater.type === "m");

  return (
    <div className="container  text-center mt-3">
      <h1>DBZ Womens</h1>
      <hr />

      <div className="row">
        {womens.map((women) => (
          <Card key={women.id} {...women} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
