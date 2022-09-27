import React from "react";

const DetailCountry = ({ countrie }) => {
  return (
    <div>
      <h1>{countrie.name.common}</h1>
      <div>
        <p>
          Capital: {countrie.capital} <br></br>
          Population: {countrie.population}
        </p>
      </div>
      <h3>Languages</h3>
      <div>
        {Object.keys(countrie.languages).map((key) => {
          return (
            <ul key={key}>
              <li> {countrie.languages[key]}</li>
            </ul>
          );
        })}
      </div>
      <div>
        <img alt="" src={countrie.flags.png}></img>;
      </div>
    </div>
  );
};
export default DetailCountry;
