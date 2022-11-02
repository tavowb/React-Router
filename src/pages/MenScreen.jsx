import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const mens = Characters.filter((charater) => charater.type === "h");

  return (
    <div className="container  text-center mt-3">
      <h1>DBZ Mens</h1>
      <hr />

      <div className="row">
        {mens.map((men) => (
          <Card key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
