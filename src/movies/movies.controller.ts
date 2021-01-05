import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return "This will return all movies";
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
