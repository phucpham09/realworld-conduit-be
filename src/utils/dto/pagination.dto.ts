import { IsInt, IsOptional } from 'class-validator';

export class Pagination {
  @IsInt()
  @IsOptional()
  readonly limit: number = 6;
  @IsInt()
  @IsOptional()
  readonly page: number = 1;
}
