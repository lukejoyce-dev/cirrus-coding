import { Router } from "express";
import meter from "./meter";

const routes = Router();

routes.use("/meter", meter);
// No match so send 501 - Not Implemented
routes.all("/*", (_req, res) => {
  res.status(501).send();
});

export default routes;
