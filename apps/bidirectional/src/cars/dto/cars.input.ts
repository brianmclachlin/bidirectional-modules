import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class CarsInput {
  @Field()
  ownerId: number;
}
