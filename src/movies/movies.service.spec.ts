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
    it("should return a movie", () => {
      service.create({
        title: "test",
        genres: ["test"],
        year: 2020
      });
      const movie = service.getOne(0);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(0);
    });

    it("should throw 404 error", () => {
      try {
        service.getOne(0);
      } catch(err) {
        expect(err).toBeInstanceOf(NotFoundException);
        expect(err.message).toEqual("Movie with ID 0 not found");
      }
    });
  });

  describe("deleteOne", () => {
    it("should delete a movie", () => {
      service.create({
        title: "test",
        genres: ["test"],
        year: 2020
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(0);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });  
  });
  it("should return a 404 error", () => {
    try {
      service.deleteOne(0);
    } catch(err) {
      expect(err).toBeInstanceOf(NotFoundException);
      expect(err.message).toEqual("Movie with ID 0 not found");
    }
  });
});