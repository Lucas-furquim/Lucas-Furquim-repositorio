import BtnHome from "./modulos/btnHome.js";
import Habilidade from "./modulos/Habilidade.js";

const btnHome = new BtnHome(
  ".header-nav button",
  ".btnHome ",
  ".header",
  ".btnHome-Nav ul"
);
btnHome.init();

Habilidade();
