import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardNoticia = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.1rem black;
  /* max-width: 250px; */
  justify-content: space-between;
  width: 20rem;
  height: 20rem;
  gap: 1rem;
  margin: 1rem 1rem;
  &:hover {
    box-shadow: 0 0 1rem black;
  }
`;
export const ImageNoticia = styled.img`
  height: 60%;
  width: 100%;
`;
export const TituloNoticia = styled.h2`
  width: 100%;
  font-size: 1rem;
  padding: 0 1rem;
  text-align: start;
`;
export const DivLink = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: end;
`;
export const LinkUrl = styled(Link)`
  text-decoration: none;
  color: green;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  padding: 0.4rem;
  text-align: center;
  background-color: #3E9FC6;
  color: white;
  margin-bottom: .1rem;
  :hover {
    transition: background-color .3s ease;
    background-color: #205266;
  }
`;
