import "./style.css";
import typescriptLogo from "./typescript.svg";
import { fullName } from "./bases/01-const-let";
import "./bases/02-object";
import "./bases/03-arrays";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${fullName}</h1>
  </div>
`;
