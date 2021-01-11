import { Controller, Get } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor() {}
  @Get("/")
  getHome() {
    return "hello world";
  }
}