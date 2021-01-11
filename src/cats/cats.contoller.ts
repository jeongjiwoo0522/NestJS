import { Controller, Get, Post, HttpCode, Redirect, Param, Body, Put } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cats.dto";
import { UpdateCatsDto } from "./dto/update-cats.dto";

@Controller("cats")
export class CatsController {
  @Get()
  findAll() {
    return "This action return all cats";
  }
  @Post()
  @HttpCode(201)
  create(@Body() createCatDto: CreateCatDto) {
    return "This action adds a new cat";
  }
  @Put("/:id")
  update(@Param("id") id: number, @Body() updateCatDto: UpdateCatsDto) {
    
  }
  @Get("/redirect")
  @Redirect("/", 301)
  getRedirect() {
      // redirect by return object (override)
      return {  
        statusCode: 301,
        url: "/"
      }
  }
  @Get("/:id")
  findOne(@Param("id") id: number) {

  }
}