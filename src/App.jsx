import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import axios from "axios";
import ListadoNoticias from "./components/ListadoNoticias";
function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  

  //llamada Api traer informacion
  useEffect(() => {
    const llamadaApi = async () => {
      const api = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=413c80b54858445f80138bec537b977c`;
      const info = await axios.get(api);
      setNoticias(info.data.articles);
    };
    llamadaApi();
  }, [categoria]);
  return (
    <div className="App">
      <Header titulo={"Buscador de noticias"}></Header>
      <Formulario setCategoria={setCategoria} />
      <ListadoNoticias noticias={noticias}/>
    </div>
  );
}

export default App;
