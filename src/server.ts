import { Environment, getStartAplication, DataBase } from "./config";

(async () => {
  await Environment.register();
  await DataBase.register();
  getStartAplication();
})();
