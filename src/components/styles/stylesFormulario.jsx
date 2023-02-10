import styled from "styled-components";

export const ContainerFormulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
`;
export const InputSubmit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 40%;
  padding: 0.5rem;
  background-color: orange;
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`;
export const Titulo = styled.h2`
  font-size: 1.5rem;

  font-weight: 900;
`;
