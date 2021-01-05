import { IsNumber, IsString } from "class-validator";

class UpdateMovieDto {
  @IsString()
  public readonly title?: string;

  @IsNumber()
  public readonly year?: number;

  @IsString({ each: true })
  public readonly genres?: string[];
}

export { UpdateMovieDto }