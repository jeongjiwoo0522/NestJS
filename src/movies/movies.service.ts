import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find(movie => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies = this.movies.filter(movie => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length,
      ... movieData,
    });
  }
}
