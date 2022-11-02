import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, description, type, id }) => {
  const path = `/assets/${type}-${name}.png`;

  return (
    <div
      className="card m-3 col-12 col-md-4"
      style={{
        width: 200,
      }}
    >
      <img loading="lazy" src={path} alt={id} className="card-img-top" />

      <div className="card-body">
        <h3 className="card-title"> {name} </h3>
        <p className="card-text"></p>
        <Link className="card-link" to={`/character/${id}`}>
          Ver más...
        </Link>
      </div>
    </div>
  );
};

export default Card;
