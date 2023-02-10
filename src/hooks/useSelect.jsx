import React, { useState } from "react";
import { Select } from "../components/styles/stylesSelect";

const useSelect = (stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);
  const onChange = (e) => {
    setState(e.target.value);
  };
  const SelectNoticias = () => (
    <Select value={state} onChange={(e) => onChange(e)}>
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value} name={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </Select>
  );
  return [state, SelectNoticias];
};

export default useSelect;
