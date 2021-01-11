import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Request, Response } from "supertest";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("log..");
    next();
  }
}