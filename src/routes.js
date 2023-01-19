import PaginaInicial from "./Paginas/PaginaInicial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaDePagamento from "./Paginas/PaginaDePagamento";
import PaginaDeRecibo from "Paginas/PaginaDeRecibo";
import { useEffect, useState } from "react";


function App() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then(res => res.json())
      .then((resultado) => {
        setUsuarios(resultado)
      })
  }, []);

  const [data, setDada] = useState();

  function infoData(value) {
    setDada(value);
  };
 
  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<PaginaInicial usuarios={usuarios} />} />
        <Route path="pagamentos/:id" element={<PaginaDePagamento usuarios={usuarios}
          payInforms={values => infoData(values)} />} />
        <Route path="recibo" element={<PaginaDeRecibo  info={data} />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
