import { Injectable } from '@nestjs/common';
import { ExerciseCategoryRepository } from './exercise-category.repository';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';

@Injectable()
export class ExerciseCategoryService {
  constructor(private readonly exerciseCategorie: ExerciseCategoryRepository) {}

  async findAllExerciceCategory() {
    const exerciseCategories = await this.exerciseCategorie.findAll();
    return exerciseCategories;
  }

  async findOneExerciceCategory(id: number) {
    const category = await this.exerciseCategorie.findById(id);
    return category;
  }

  async createExerciceCategory(exerciseCategory: CreateExerciseCategoryDto) {
    const newCategory = await this.exerciseCategorie.create(exerciseCategory);
    return newCategory;
  }

  removeExerciceCategory(id: number) {
    return this.exerciseCategorie.remove(id);
  }
}
