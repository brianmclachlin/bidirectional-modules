import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarsService} from "./cars.service";
import {Car} from "./car.entity";
import {CarsResolver} from "./cars.resolver";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
    forwardRef(() => UsersModule),
  ],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
