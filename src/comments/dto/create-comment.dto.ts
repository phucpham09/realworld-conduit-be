import { IsInt, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  content: string;
  @IsInt()
  articleId: number;
}
