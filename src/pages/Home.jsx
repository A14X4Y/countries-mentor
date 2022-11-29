import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then((res) => setCountries(res.data));
  }, []);
  console.log(countries);
  return (
    <>
      <Controls />
      <List>
        {countries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.population,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };
          return <Card key={country.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default Home;
