import { Router } from "express";
import multer from "multer";

import  { CreateCategoryController }  from "../modules/cars/useCases/createCategory/CreateCategoryController";
import  { ListCategoriescontroller }  from "../modules/cars/useCases/listCategories/ListCategoriesController";
import  { ImportCategoryController }  from "../modules/cars/useCases/importCategory/ImportCategoryController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

const listCategoriesController = new ListCategoriescontroller();
categoriesRoutes.get("/", listCategoriesController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };