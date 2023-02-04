import {InjectRepository} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {User} from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({where: {id}});
  }
}
