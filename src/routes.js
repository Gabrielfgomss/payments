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
    fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989')
      .then(res => res.json())
      .then((resultado) => {
        setStatus(resultado)
      })
  }, []);

  const [status, setStatus] = useState([]);

  const [card, setCard] = useState();

  function paymentCard(value) {
    setCard(value);
  };

  // Primeiro resolver submit
  // Ir para a rota recibo
  // 

  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<PaginaInicial usuarios={usuarios} />} />
        <Route path="pagamentos/:id" element={<PaginaDePagamento usuarios={usuarios}
          payInforms={values => paymentCard(values)} />} />
        <Route path="recibo" element={<PaginaDeRecibo status={status} card={card} />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
