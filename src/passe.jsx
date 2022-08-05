import Qrcode from "./qrcode";
import { useNavigate } from "react-router-dom";

const Passe = () => {
  const navigate = useNavigate();
  return (
    <>
      <Qrcode />
      <button onClick={() => navigate("/")}>Retour &agrave; l'accueil</button>
    </>
  );
};

export default Passe;
