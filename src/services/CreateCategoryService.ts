import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void{
    const categotyAlreadyExistis = this.categoriesRepository.findByName(name);

    if(categotyAlreadyExistis){
     throw new Error("Category already existis.");
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  };
};

export { CreateCategoryService };
