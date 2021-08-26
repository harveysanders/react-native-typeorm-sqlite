import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  desc!: string;

  @Column()
  isComplete!: boolean;
}
