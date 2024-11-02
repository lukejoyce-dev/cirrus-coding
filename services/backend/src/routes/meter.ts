import MeterController from "@controllers/meter";
import { Router } from "express";

const router = Router();

// Get meter by Id
router.get(
  "/:meterId",
  //[isAuthenticated, isAuthorised("/api/meter")],
  MeterController.findOne
);

// No match so send 501 - Not Implemented
router.all("/*", (req, res) => {
  res.status(501).send();
});

export default router;
