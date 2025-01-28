import { Column } from 'typeorm';

export class RegistryDate {
  @Column({ default: new Date() })
  createAt: Date;
  @Column({ default: new Date() })
  updateAt: Date;
}
