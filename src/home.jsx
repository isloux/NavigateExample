import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import Felicitations from "./felicitations";

const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const donneAutorisation = () => {
    if (state) return state.testFait && !state.malade;
    else return false;
  };

  const cliqueImpression = () => {
    const messageAlerte = "Vous devez passer le test !";
    if (state) {
      if (!state.malade) navigate("/passe");
      else alert(messageAlerte);
    } else alert(messageAlerte);
  };

  return (
    <div className="App">
      <h1>Mesdames, messieurs</h1>
      <h2>V&eacute;rifiez si vous &ecirc;tes infect&eacute;s !</h2>
      <button onClick={() => navigate("/resultat")}>
        Faire un test COVID-19
      </button>
      <hr />
      <Felicitations autorisation={donneAutorisation()} />
      <button onClick={cliqueImpression}>
        Imprimer un passe bistrot-piscine
      </button>
    </div>
  );
};

export default Home;
