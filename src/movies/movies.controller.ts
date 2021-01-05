import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get("search") //  '/'가 없어도 동작 
  search(@Query("year") searchingYear: string) {
    return `We are search for a movie made after: ${searchingYear}`;
  }

  @Get("/:id")
  getOne(@Param("id") movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: Movie) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:id") 
  remove(@Param("id") movieId: string) {
    return this.moviesService.deleteOne(movieId);
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
