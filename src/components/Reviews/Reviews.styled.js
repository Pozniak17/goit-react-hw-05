import styled from "styled-components";

export const Wrapper = styled.div``;

export const Item = styled.li`
  background-color: #b9b4ff8a;
  list-style: none;
  border: ${(props) => props.theme.borders.normal} white;
  padding: 15px;
  border-radius: ${(props) => props.theme.radii.big}; //12px
`;

export const Title = styled.h2`
  margin-right: 10px;
  text-align: center;
`;
