import { useState, useEffect } from "react";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";
import Search from "./Search";
const options = [
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Select Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
