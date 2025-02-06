import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tag = await this.tagsRepository.save(createTagDto);
    return tag;
  }

  async findAll() {
    return this.tagsRepository.find();
  }

  findOne(id: number) {
    return this.tagsRepository.findOneBy({ tagid: id });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const tag = await this.tagsRepository.findOneBy({ tagid: id });
    if (tag) {
      await this.tagsRepository.update(id, updateTagDto);
    } else {
      throw new HttpException('Tag not found!', HttpStatus.BAD_REQUEST);
    }
    return this.tagsRepository.findOneBy({ tagid: id });
  }

  remove(id: number) {
    return this.tagsRepository.delete(id);
  }
}
