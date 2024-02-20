import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: space-evenly;
  align-items: baseline;
`;

export const Item = styled.li`
  list-style: none;
  justify-content: center;
`;
