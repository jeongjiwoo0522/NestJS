import { PartialType } from "@nestjs/mapped-types";
import { CreateCatDto } from "./create-cats.dto";

export class UpdateCatsDto extends PartialType(CreateCatDto) {}