import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return "This will return all movies";
  }

  @Get("search") //  '/'가 없어도 동작
  search(@Query("year") searchingYear: string) {
    return `We are search for a movie made after: ${searchingYear}`;
  }

  @Get("/:id")
  getOne(@Param("id") movieId: string) {
    return `This will return one movies with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: { name: string, director: string }) {
    console.log(movieData.director, movieData.name);
    return movieData;
  }

  @Delete("/:id") 
  remove(@Param("id") movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch("/:id")
  path(@Param("id") movieId: string, @Body() updateData: { name: string, director: string }) {
    console.log(updateData);
    return {
      updateMovie: movieId,
      ... updateData,
    };
  }
}
