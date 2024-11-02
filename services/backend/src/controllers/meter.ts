import { RequestWithAuth } from "@middleware/auth";
import MeterService from "@services/meter";
import { Meter } from "../types/meter";
import { Response } from "express";

class MeterController {
  /**
   * Find a single Meter
   *
   * @param {RequestWithAuth} req - The request object with authentication info
   * @param {Response} res - The response object
   * @returns {Promise<void>} - A promise that resolves when the response is sent
   */
  static findOne = async (
    req: RequestWithAuth,
    res: Response
  ): Promise<void> => {
    const meterId: string = req.params.meterId;
    try {
      const result: Meter = await MeterService.findOne(meterId);
      res.status(200).json(result); // Send the retrieved Meter data
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(404).json({ error: error.message || "Meter not found" });
      } else {
        res.status(500).json({ error: "An unexpected error occurred" });
      }
    }
  };
}

export default MeterController;
