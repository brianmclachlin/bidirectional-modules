import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarsService} from "./cars.service";
import {Car} from "./car.entity";
import {UsersModule, UsersService} from "@bidirectional-modules/users";
import {CarsResolver} from "./cars.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
    forwardRef(() => UsersModule),
  ],
  providers: [CarsService, CarsResolver, UsersService],
  exports: [CarsService],
})
export class CarsModule {}
