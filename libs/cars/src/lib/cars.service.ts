import {InjectRepository} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";
import {Car} from "./car.entity";
import {Repository} from "typeorm";
import {CarsInput} from "./dto/cars.input";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async findAll(carsInput: CarsInput): Promise<Car[]> {
    return await this.carRepository.find({where: {
      ownerId: carsInput.ownerId
    }});
  }

  async findOne(id: number): Promise<Car> {
    return await this.carRepository.findOne({where: {id}});
  }
}
