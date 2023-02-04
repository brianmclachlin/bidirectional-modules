import {Args, Int, Parent, Query, ResolveField, Resolver,} from '@nestjs/graphql';
import {CarsService} from "./cars.service";
import {Car} from "./car.entity";
import {UsersService} from "@bidirectional-modules/users";
import {CarsInput} from "./dto/cars.input";

@Resolver(() => Car)
export class CarsResolver {
  constructor(
    private readonly carsService: CarsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [Car])
  async car(@Args('id', { type: () => Int }) id: number): Promise<Car> {
    return await this.carsService.findOne(id);
  }

  @Query(() => [Car])
  cars(@Args('where') carsInput: CarsInput): Promise<Car[]> {
    return this.carsService.findAll(carsInput);
  }

  @ResolveField()
  async owner(@Parent() car: Car) {
    return await this.usersService.findOne(car.ownerId);
  }
}
