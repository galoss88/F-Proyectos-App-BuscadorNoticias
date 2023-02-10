import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavHeader = styled.nav`
  display: flex;
  width: 100vw;
  background-color: #0d4fa2;
  padding: 1rem;
  justify-content: center;
`;
export const HeaderLink = styled(Link)`
  display: flex;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;
