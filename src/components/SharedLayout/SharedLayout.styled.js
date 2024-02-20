import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: ${(props) => props.theme.spacing(4)}; //16px
  border-bottom: ${(props) => props.theme.borders.normal} black;
`;

export const List = styled.ul`
  display: flex;

  > li {
    margin-right: ${(props) => props.theme.spacing(3)}; //12px

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const Logo = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.larger}; //500
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${(props) => props.theme.radii.normal};
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.larger}; //500

  &.active {
    color: ${(props) => props.theme.colors.white};
    background-color: #9c27b0;
  }
`;
