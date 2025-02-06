import { User } from 'src/users/entities/user.entity';
import { RegistryDate } from 'src/utils/common/registryDate';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  articleid: number;

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
