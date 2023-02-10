import React from "react";
import {
  ContainerFormulario,
  InputSubmit,
  Titulo,
} from "./styles/stylesFormulario";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  //usar custom hooks
  const [optionSeleccionada, Select] = useSelect("general", OPCIONES);

  //submit, guarda categoria en state de app.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(optionSeleccionada);
  };
  
  return (
    <ContainerFormulario onSubmit={(e) => handleSubmit(e)}>
      <Titulo>ENCUENTRA NOTICIAS POR CATEGORIA</Titulo>
      <Select />
      <InputSubmit type={"submit"} value="BUSCAR" />
    </ContainerFormulario>
  );
};

export default Formulario;
