import React from "react";
import Noticia from "./Noticia";
import { ContainerListaNoticias } from "./styles/stylesListadoNoticias";

const ListadoNoticias = ({ noticias }) => {
  return (
    <ContainerListaNoticias>
      {noticias?.map((noticia, index) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </ContainerListaNoticias>
  );
};

export default ListadoNoticias;
