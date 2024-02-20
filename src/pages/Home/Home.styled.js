import { FaBookmark } from "react-icons/fa";
import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  justify-items: center;
`;

export const BookmarkIcon = styled(FaBookmark)`
  position: absolute;
  visibility: hidden;
  color: #dac2c2;
  right: 20px;
  top: 15px;
  width: 35px;
  height: 35px;
  cursor: pointer;

  :hover {
    color: #bd0808fc;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 10px;
  background-color: #cccccc;
  text-align: center;
  border-radius: ${(props) => props.theme.radii.big}; //12px
  /* overflow: hidden; Додано, щоб контент не виходив за межі елементу */

  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 8px 2px;

  &:hover {
    transform: scale(1.1); /* Збільшення розміру при наведенні */
    transition: transform 0.3s ease; /* Плавний перехід */
  }

  &:hover > ${BookmarkIcon} {
    visibility: visible;
  }
`;
