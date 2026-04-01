import { initRouter, register } from "./core/router.js";
import { renderHome }           from "./pages/home.js";
import { renderSearch }         from "./pages/search.js";

const app = document.getElementById("app") as HTMLElement;

register("/",       () => renderHome(app));
register("/search", () => renderSearch(app));

initRouter();