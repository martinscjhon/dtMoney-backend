import { Environment, getStartAplication } from "./config";
import { Connection } from "typeorm";

let conn: Connection;

(async () => {
  await Environment.register();
  getStartAplication(conn);
})();
