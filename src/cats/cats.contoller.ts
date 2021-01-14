import {
  Controller,
  Get,
  Post,
  Put,
  HttpCode,
  Redirect,
  Param,
  Body,
  UseFilters,
  ParseIntPipe,
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cats.dto";
import { UpdateCatsDto } from "./dto/update-cats.dto";
import { ForbiddenException } from "../exceptions/forbidden";
import { HttpExceptionFilter } from "../exceptions/http-exception.filter";

@Controller("cats")
export class CatsController {
  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll() {
    throw new ForbiddenException();
  }
  @Post()
  @HttpCode(201)
  create(@Body() createCatDto: CreateCatDto) {
    return "This action adds a new cat";
  }
  @Put("/:id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateCatDto: UpdateCatsDto) {}
  @Get("/redirect")
  @Redirect("/", 301)
  getRedirect() {
    return {
      statusCode: 301,
      url: "/",
    };
  }
  @Get("/:id")
  findOne(@Param("id") id: number) {}
}
