import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { IdDto } from 'src/utils/dto/id.dto';
import { User } from 'src/users/entities/user.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Pagination } from 'src/utils/dto/pagination.dto';

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
      name: In(createArticleDto.tagName),
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

  async findAll(pagination: Pagination) {
    const [, totalArticle] = await this.articleRepository.findAndCount();
    const totalPage = Math.floor(totalArticle / pagination.limit) + 1;
    const offset = (pagination.page - 1) * pagination.limit;
    const article = await this.articleRepository.find({
      skip: offset,
      take: pagination.limit,
      relations: ['user', 'tags', 'comments'],
    });
    return { article, totalPage };
  }

  findOne({ id }: IdDto) {
    return this.articleRepository.findOne({
      where: { articleid: id },
      relations: ['user', 'tags', 'comments'],
    });
  }

  async update({ id }: IdDto, updateArticleDto: UpdateArticleDto) {
    const article = await this.articleRepository.findOne({
      where: { articleid: id },
      relations: ['tags', 'likedByUsers'],
    });

    const updatedFields: Partial<Article> = { ...updateArticleDto };

    if (updateArticleDto.tagName) {
      updatedFields.tags = await this.tagRepository.findBy({
        tagid: In(updateArticleDto.tagName),
      });
    }
    if (updateArticleDto.likedBy) {
      updatedFields.likedByUsers = await this.userRepository.findBy({
        userid: In(updateArticleDto.likedBy),
      });
    }

    if (article) {
      await this.articleRepository.save({
        ...article,
        ...updatedFields,
      });
    } else {
      throw new HttpException('Article Not Found', HttpStatus.BAD_REQUEST);
    }
    return await this.articleRepository.findOne({
      where: { articleid: id },
      relations: ['user', 'likedByUsers', 'tags'],
    });
  }

  async remove({ id }: IdDto) {
    await this.articleRepository.delete(id);
  }
}
