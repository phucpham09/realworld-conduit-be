import { IsArray, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title: string;
  @IsString()
  slug: string;
  @IsString()
  description: string;
  @IsString()
  body: string;
  @IsArray()
  tagIds: number[];
}
