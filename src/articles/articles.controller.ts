import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Public } from 'src/utils/decorators/public.decorator';
import { IdDto } from 'src/utils/dto/id.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Request() req, @Body() createArticleDto: CreateArticleDto) {
    return await this.articlesService.create(req.user.userid, createArticleDto);
  }

  @Public()
  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.articlesService.findAll(limit, offset);
  }

  @Public()
  @Get(':id')
  findOne(@Param() { id }: IdDto) {
    return this.articlesService.findOne({ id });
  }

  @Patch(':id')
  update(@Param() { id }: IdDto, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update({ id }, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param() { id }: IdDto) {
    return this.articlesService.remove({ id });
  }
}
