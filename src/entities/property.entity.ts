import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id!: number; // Database automatically increments this, no default needed in code

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ type: 'int', default: 0 })
  price!: number; 
}