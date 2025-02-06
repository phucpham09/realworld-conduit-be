import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { IdDto } from 'src/utils/dto/id.dto';
import { User } from 'src/users/entities/user.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  async create(id: number, createArticleDto: CreateArticleDto) {
    const user = await this.userRepository.findOneBy({ userid: id });
    const tags = await this.tagRepository.findBy({
      tagid: In(createArticleDto.tagIds),
    });
    const res = await this.articleRepository.save({
      ...createArticleDto,
      tags,
      user,
    });
    return this.articleRepository.findOne({
      where: { articleid: res.articleid },
      relations: ['user', 'tags'],
    });
  }

  findAll() {
    return this.articleRepository.find({ relations: ['user', 'tags'] });
  }

  findOne({ id }: IdDto) {
    return this.articleRepository.findOneBy({ articleid: id });
  }

  async update({ id }: IdDto, updateArticleDto: UpdateArticleDto) {
    const article = await this.articleRepository.findOneBy({ articleid: id });
    const tags = await this.tagRepository.findBy({
      tagid: In(updateArticleDto.tagIds),
    });
    if (article) {
      await this.articleRepository.save({
        ...article,
        ...updateArticleDto,
        tags,
      });
    } else {
      throw new HttpException('Article Not Found', HttpStatus.BAD_REQUEST);
    }
    return await this.articleRepository.findOne({ where: { articleid: id } });
  }

  async remove({ id }: IdDto) {
    await this.articleRepository.delete(id);
  }
}
