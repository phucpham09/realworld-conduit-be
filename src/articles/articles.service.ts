import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { IdDto } from 'src/utils/dto/id.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  async create(id: number, createArticleDto: CreateArticleDto) {
    const user = await this.userRepository.findOneBy({ userid: id });
    const res = await this.articleRepository.save({
      ...createArticleDto,
      user,
    });
    return this.articleRepository.findOne({
      where: { articleid: res.articleid },
      relations: ['user'],
    });
  }

  findAll() {
    return this.articleRepository.find({ relations: ['user'] });
  }

  findOne({ id }: IdDto) {
    return this.articleRepository.findOneBy({ articleid: id });
  }

  async update({ id }: IdDto, updateArticleDto: UpdateArticleDto) {
    await this.articleRepository.update(id, updateArticleDto);
  }

  async remove({ id }: IdDto) {
    await this.articleRepository.delete(id);
  }
}
