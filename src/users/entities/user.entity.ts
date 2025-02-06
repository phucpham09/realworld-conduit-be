import { Article } from 'src/articles/entities/article.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { RegistryDate } from 'src/utils/common/registryDate';
import { Roles } from 'src/utils/common/user-roles.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userid: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column(null, { nullable: true })
  imageUrl: string;
  @Column(null, { nullable: true })
  bio: string;
  @Column()
  role: Roles;
  @Column(() => RegistryDate)
  registryDate: RegistryDate;

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
