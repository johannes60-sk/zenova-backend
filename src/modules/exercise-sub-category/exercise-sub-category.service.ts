import { Injectable } from '@nestjs/common';
import { ExerciseSubCategoryRepository } from './exercise-sub-category.repository';
import { CreateExerciseSubCategoryDto } from './dto/exercise-sub-category.dto';

@Injectable()
export class ExerciseSubCategoryService {
  constructor(
    private readonly exerciseCateogyRepository: ExerciseSubCategoryRepository,
  ) {}

  async findAllSubCategory() {
    const categories = this.exerciseCateogyRepository.findAll();
    return categories;
  }

  async findOneSubCategory(id: number) {
    const category = await this.exerciseCateogyRepository.findById(id);
    return category;
  }

  async createSubCategory(data: CreateExerciseSubCategoryDto) {
    const newCategory = await this.exerciseCateogyRepository.create(data);
    return newCategory;
  }

  async removeSubCategory(id: number) {
    return this.exerciseCateogyRepository.remove(id);
  }
}
