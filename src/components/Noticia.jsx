import React from "react";
import {
  CardNoticia,
  DivLink,
  ImageNoticia,
  LinkUrl,
  TituloNoticia,
} from "./styles/stylesNoticia";

const Noticia = ({ noticia }) => {
  const { urlToImage, title, description, url, author } = noticia;
  //comprobar si hay imagen en la noticia
  const Imagen = urlToImage ? (
    <ImageNoticia src={urlToImage} alt="Sin imagen" />
  ) : null;
  return (
    <CardNoticia>
      {Imagen}
      <TituloNoticia>{title}</TituloNoticia>
      <DivLink>
        <LinkUrl to={url}>Ver Noticia Completa</LinkUrl>
      </DivLink>
    </CardNoticia>
  );
};

export default Noticia;
