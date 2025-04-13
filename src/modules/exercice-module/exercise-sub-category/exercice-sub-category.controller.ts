import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ExerciseSubCategoryService } from './exercise-sub-category.service';
import { CreateExerciseSubCategoryDto } from './dto/exercise-sub-category.dto';

@Controller('exercice-sub-categories')
export class ExerciceSubCategoryController {
  constructor(
    private readonly subCategoryService: ExerciseSubCategoryService,
  ) {}

  @Get()
  async findAllSubCategory() {
    const categories = await this.subCategoryService.findAllSubCategory();
    return categories;
  }

  @Get(':id')
  async findOneSubCategory(@Param('id', ParseIntPipe) id: number) {
    const category = await this.subCategoryService.findOneSubCategory(id);
    return category;
  }

  @Post()
  async createSubCategory(
    @Body() exerciseSubCategory: CreateExerciseSubCategoryDto,
  ) {
    const newCategory =
      await this.subCategoryService.createSubCategory(exerciseSubCategory);
    return newCategory;
  }
}
