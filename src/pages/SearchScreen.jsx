import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import { useEffect } from "react";
import Card from "../components/Card";
const SearchScreen = () => {
  const location = useLocation();
  const { name = "" } = queryString.parse(location.search);
  const [inputValue, setinputValue] = useState(name);
  const [lCharacters, setlCharacters] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    getCharacters();
  }, [name]);

  const handleChange = (e) => {
    const value = e.target.value;
    setinputValue(value);
    setParams({
      name: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCharacters();
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      console.log("if");
      const val = inputValue.toLocaleLowerCase();
      const character = Characters.filter((Characters) =>
        Characters.name.toLocaleLowerCase().includes(val)
      );
      setlCharacters(character);
    } else {
      console.log("else");
      setlCharacters([]);
    }
  };
  return (
    <div class="container">
      <h1>Search</h1>
      <hr className="mb-3" />
      <div class="row">
        <div class="col mt-3">
          <input
            placeholder="Name Character"
            type="text"
            className="form-control"
            autoComplete="off"
            value={inputValue}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          />
        </div>

        <div class="col mt-3">
          <h2>Results: {lCharacters.length} </h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <button
            type="submit"
            className="my-1 btn btn-info h-75 w-100"
            onSubmit={handleSubmit}
          >
            Search
          </button>
        </div>

        <div class="col">
          {lCharacters.length === 0 ? (
            <div className="alert alert-warning text-center">
              Please search a character!
            </div>
          ) : (
            <div class="alert alert-primary text-center" role="alert">
              Found characters!
            </div>
          )}
        </div>
      </div>

      <div className="row">
        {lCharacters.map((men) => (
          <Card key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
