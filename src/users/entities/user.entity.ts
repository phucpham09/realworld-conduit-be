import { RegistryDate } from 'src/utils/common/registryDate';
import { Roles } from 'src/utils/common/user-roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
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
}
