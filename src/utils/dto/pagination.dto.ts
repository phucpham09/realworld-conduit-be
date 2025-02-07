import { IsInt } from 'class-validator';

export class Pagination {
  @IsInt()
  readonly limit: number;
  @IsInt()
  readonly offset: number;
}
