import {Args, Int, Parent, Query, ResolveField, Resolver,} from '@nestjs/graphql';
import {User} from "./user.entity";
import {UsersService} from "./users.service";
import {CarsService} from "../cars/cars.service";

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly carsService: CarsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [User])
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @ResolveField()
  async cars(@Parent() user: User) {
    return await this.carsService.findAll({ownerId: user.id});
  }
}
