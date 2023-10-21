import "express-async-errors";
import { Application, json, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./error";
import bodyParser from "body-parser";
export default function Middleware(app: Application): void {
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: "error",
          message: err.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    }
  );
}
