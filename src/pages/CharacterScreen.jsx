import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Characters } from "../models/Characters";

const CharacterScreen = () => {
  const { id } = useParams();
  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );
  const path = `/assets/${type}-${name}.png`;

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container row  mt-5">
      <div className="m-3 col-12 col-md-4">
        <img className="img-thumbnail" src={path} alt={id} />
      </div>
      <div className="m-3 col-12 col-md-4">
        <h2>Nombre: {name} </h2>
        <p>Descripción: {description} </p>
        <button onClick={handleBack} className="btn btn-outline-warning ">
          {" "}
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
