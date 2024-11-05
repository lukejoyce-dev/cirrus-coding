import { RequestWithAuth } from "../types/auth";
import { Response } from "express";
import MeterService from "@services/meter";
import { MeterDto } from "@dto/meterDto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

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
      const result = await MeterService.findOne(meterId);
      // Meter not found
      if (!result) {
        res.status(404).json({ error: "Meter not found" });
        return;
      }
      // Transform the result to MeterDto
      const meterDto = plainToClass(MeterDto, result);
      const errors = await validate(meterDto);
      if (errors.length > 0) {
        res.status(400).json({ errors: errors });
        return;
      }
      // Send the validated Meter data
      res.status(200).json(meterDto);
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
