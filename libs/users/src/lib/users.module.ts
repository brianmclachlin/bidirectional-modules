import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {CarsModule, CarsService} from "@bidirectional-modules/cars";
import {UsersService} from "./users.service";
import {UsersResolver} from "./users.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => CarsModule),
  ],
  providers: [UsersService, UsersResolver, CarsService],
  exports: [UsersService],
})
export class UsersModule {}
