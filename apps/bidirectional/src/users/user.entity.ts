import {Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Car} from "../cars/car.entity";

@Entity()
@ObjectType()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true })
  id: number;

  @Field(() => [Car])
  @OneToMany(
    () => Car,
    (car) => car.owner,
  )
  cars: Car[];
}
