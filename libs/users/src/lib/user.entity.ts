import {Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "@bidirectional-modules/cars";
import {Field, Int} from "@nestjs/graphql";

@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true })
  id: number;

  @Field(() => [Car])
  @OneToMany(
    () => Car,
    (car) => car.owner,
  )
  cars?: Car[];
}
