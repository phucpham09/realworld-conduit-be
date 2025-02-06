import { Article } from 'src/articles/entities/article.entity';
import { User } from 'src/users/entities/user.entity';
import { RegistryDate } from 'src/utils/common/registryDate';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentid: number;
  @Column()
  content: string;
  @Column(() => RegistryDate)
  registryDate: RegistryDate;
  @ManyToOne(() => User, (user) => user.comments)
  user: User;
  @ManyToOne(() => Article, (article) => article.comments)
  article: Article;
}
