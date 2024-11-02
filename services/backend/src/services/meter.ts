import { Meter } from "../types/meter";
import * as fs from "fs";
import * as path from "path";
import Logger from "@config/logger";

class MeterService {
  /**
   * Find a single Meter
   *
   * @param id Meter Id
   * @returns Promise<Meter>
   */
  static async findOne(id: string): Promise<Meter> {
    const filePath = path.join(__dirname, "../data.json");
    try {
      const data = await new Promise<string>((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      console.log("Data read from file:", data);
      const meters: Meter[] = JSON.parse(data);
      const meter = meters.find((m) => m.guid === id);

      if (!meter) {
        throw new Error(`Meter with id ${id} not found`);
      }

      return meter;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}

export default MeterService;
