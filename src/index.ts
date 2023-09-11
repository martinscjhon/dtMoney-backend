import { Environment, getStartAplication } from "./config";

(async () => {
  await Environment.register();
  getStartAplication();
})();
