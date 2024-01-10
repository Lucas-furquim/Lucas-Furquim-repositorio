import Github from "./js/hover-contact.js";
import Lin from "./js/hover-lin.js";
import Mobile from "./js/mobile.js";

const lin = new Lin("jslin");
lin.init();

const github = new Github("jsgit");
github.init();

const mobile = new Mobile("[data-drop]", "[data-drop-tela]");
mobile.init();
