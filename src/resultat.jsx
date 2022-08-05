import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Message from "./message";

const Resultat = () => {
  const navigate = useNavigate();
  const [resultat, setResultat] = useState();

  useEffect(() => {
    if (Math.random() > 0.5) setResultat(false);
    else setResultat(true);
  }, []);

  return (
    <div className="App">
      <Message malade={resultat} />
      <br />
      <button
        onClick={() => {
          navigate("/", { state: { testFait: true, malade: resultat } });
        }}
      >
        Retour &agrave; l'accueil
      </button>
    </div>
  );
};

export default Resultat;
