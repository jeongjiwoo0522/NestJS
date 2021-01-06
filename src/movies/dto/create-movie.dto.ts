import { IsNumber, IsOptional, IsString } from "class-validator";

class CreateMovieDto {
  // data transfer object
  @IsString()
  public readonly title: string;

  @IsNumber()
  public readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  public readonly genres: string[];
}

export { CreateMovieDto };
