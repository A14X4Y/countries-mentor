import styled from "styled-components";

import { BsSearch } from "react-icons/bs";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 5rem;
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <BsSearch />
      <Input
        type="search"
        placeholder="Search for a country"
        onChange={({ target }) => setSearch(target.value)}
        value={search}
      />
    </InputContainer>
  );
};
export default Search;
