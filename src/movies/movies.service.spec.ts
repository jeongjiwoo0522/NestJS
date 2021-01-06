import { MoviesService } from './movies.service';
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

describe("MovieService", () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  describe("getAll", () => {
    it("should return a array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne", () => {
    it("sould return a movie", () => {
      service.create({
        title: "test",
        genres: ["test"],
        year: 2020
      });
      const movie = service.getOne(0);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(0);
    });

    it("sould throw 404 error", () => {
      try {
        service.getOne(0);
      } catch(err) {
        expect(err).toBeInstanceOf(NotFoundException);
        expect(err.message).toEqual("Movie with ID 0 not found");
      }
    });
  });
});