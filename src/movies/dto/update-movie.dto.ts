import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

class UpdateMovieDto extends PartialType(CreateMovieDto) {} // CreateMovieDto에 선택적 옵션 추가 

export { UpdateMovieDto }