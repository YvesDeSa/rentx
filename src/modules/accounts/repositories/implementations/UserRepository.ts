import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }

  async create({ name, username, password, driver_license, email }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      driver_license,
      email
    })

    await this.repository.save(user);
  };

  async findByUsername(username: string): Promise<User | undefined> {
    return await this.repository.findOne({ username });
  }

}

export { UserRepository }