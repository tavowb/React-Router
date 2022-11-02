import { useSearchParams } from "react-router-dom";
import { useState } from "react";
const BarraBusqueda = () => {
  const names = ["tavo", "mari", "julio", "isabel", "daniel"];
  let [searchParams, setSearchParams] = useSearchParams();
  let searchTerm = searchParams.get("name" || "");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setSearchParams(inputValue);
  };

  return (
    <>
      <h1>usuarios</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSearch}>
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
            <button type="submit" className="btn btn-info w-100">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BarraBusqueda;
