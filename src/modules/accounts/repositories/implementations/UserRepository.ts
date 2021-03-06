import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, password, driver_license, email }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      driver_license,
      email
    })

    await this.repository.save(user);
  };

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.repository.findOne({ email });
  }

  async findById(id: string): Promise<User | undefined> {
    return await this.repository.findOne(id);
  }

}

export { UserRepository }