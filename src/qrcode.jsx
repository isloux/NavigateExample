import moment from "moment";
import QRCode from "react-qr-code";
import React from "react";

function getNowFormatDate() {
  return moment().utc().format("YYYY-MM-DD HH:mm:ss");
}

function generate() {
  let strGenerate = "systemtime='" + getNowFormatDate() + "'";
  let content =
    "Passe_delivré_par_Christophe_Ramananjaona___VBAR_CONFIG_V1.1.0___{" +
    strGenerate +
    "}";
  content = content.replace(/(^\s*)|(\s*$)/g, "");
  strGenerate = content + "--";
  return strGenerate;
}

const Qrcode = () => {
  const code = generate();
  return (
    <div className="App">
      <h2>{code}</h2>
      <QRCode value={code} />
    </div>
  );
};

export default Qrcode;
