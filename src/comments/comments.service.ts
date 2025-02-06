import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Article } from 'src/articles/entities/article.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(id: number, createCommentDto: CreateCommentDto) {
    const user = await this.userRepository.findOne({ where: { userid: id } });
    const article = await this.articleRepository.findOne({
      where: { articleid: createCommentDto.articleId },
    });
    const comment = await this.commentRepository.create({
      ...createCommentDto,
      article,
      user,
    });
    await this.commentRepository.save(comment);
    return this.commentRepository.findOne({
      where: { commentid: comment.commentid },
      relations: ['user', 'article'],
    });
  }

  findAll() {
    return this.commentRepository.find({ relations: ['user', 'article'] });
  }

  async findOne(id: number) {
    return await this.commentRepository.findOneBy({ commentid: id });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(id, updateCommentDto);
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}
