import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
