import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {UsersService} from "./users.service";
import {UsersResolver} from "./users.resolver";
import {CarsModule} from "../cars/cars.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => CarsModule),
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
