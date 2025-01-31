import { User } from 'src/users/entities/user.entity';
import { RegistryDate } from 'src/utils/common/registryDate';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryColumn()
  articleId: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  body: string;

  @Column(() => RegistryDate)
  registry: RegistryDate;

  @ManyToOne(() => User, (user) => user.articles)
  user: User;
}
