import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie: Movie = this.movies.find(movie => movie.id === parseInt(id));
    if(!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length,
      ... movieData,
    });
  }

  update(id: string, updateData: Movie) {
    const movie: Movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ... movie, ...updateData });
  }

  search(searchingYear: string): Movie | Movie[] {
    const searchingMovie: Movie | Movie[] = this.movies.filter(movie => movie.year >= +searchingYear);
    return searchingMovie;
  }
}
