import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nick: string;

  @Column()
  password: string;

  @Column()
  refresh_token: string;
}

export { User }