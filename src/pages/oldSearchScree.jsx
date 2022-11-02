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
    <div className="container">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <label>
              Character:{" "}
              <input
                placeholder="Name Character"
                type="text"
                className="form-control"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="my-1 btn btn-info w-100">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Results: {lCharacters.length} </h2>
          {lCharacters.length === 0 ? (
            <div className="alert alert-warning text-center">
              Please search a character
            </div>
          ) : (
            lCharacters.map((c) => <Card key={c.id} {...c} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
