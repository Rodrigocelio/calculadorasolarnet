// Função principal
function Form(props) {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [selectedEstado, setSelectedEstado] = useState("");

  useEffect(() => {
      // Carregar a lista de estados da API do IBGE
      fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
          .then((response) => response.json())
          .then((data) => setEstados(data))
          .catch((error) => console.error("Erro ao carregar estados", error));
  }, []);

  useEffect(() => {
      // Carregar a lista de cidades do estado selecionado da API do IBGE
      if (selectedEstado) {
          fetch(
              `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`
          )
              .then((response) => response.json())
              .then((data) => setCidades(data))
              .catch((error) =>
                  console.error("Erro ao carregar cidades", error)
              );
      }
  }, [selectedEstado]);

  return (
      <div className="container">
          {/* Selecione um projeto */}
          <select className="select">
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="industrial">Industrial</option>
          </select>

          {/* Selecione um estado */}
          <select className="select" onChange={(e) => setSelectedEstado(e.target.value)}>
              <option value="">Selecione um estado</option>
              {estados.map((estado) => (
                  <option key={estado.id} value={estado.sigla}>
                      {estado.nome}
                  </option>
              ))}
          </select>

          {/* Selecione uma cidade */}
          <select className="select">
              <option value="">Selecione uma cidade</option>
              {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                      {cidade.nome}
                  </option>
              ))}
          </select>

          {/* Insira o custo de energia */}
          <input type="number" className="input" placeholder="Insira o custo de energia"/>

          {/* Botão de envio */}
          <button className="button" type="button" onClick={() => console.log("Botão clicado!")}>
              Enviar
          </button>
      </div>
  );
}

// Renderizar o componente
ReactDOM.render(<Form />, document.getElementById("root"));
