import { useState, useEffect } from "react";
import { CustomSelect } from "./CustomSelect";
import Search from "./Search";
const options = [
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];

const Controls = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect options={options} placeholder = "Select"/>
    </div>
  );
};

export default Controls;
