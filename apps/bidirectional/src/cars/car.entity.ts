import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";
import {User} from "../users/user.entity";

@Entity()
@ObjectType()
export class Car {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true })
  id: number;

  @Field(() => User, { nullable: false })
  @ManyToOne(
    () => User,
    (user) => user.cars,
  )
  owner: User;

  @Column({ unsigned: true })
  ownerId: number;
}
