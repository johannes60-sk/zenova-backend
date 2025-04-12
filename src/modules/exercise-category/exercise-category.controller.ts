import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ExerciseCategoryService } from './exercise-category.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';

@Controller('workout-categories')
export class ExerciseCategoryController {
  constructor(private readonly service: ExerciseCategoryService) {}

  @Get()
  async findAllExerciceCategory() {
    const categories = await this.service.findAllExerciceCategory();
    return categories;
  }

  @Get(':id')
  async findOneExerciceCategory(@Param('id', ParseIntPipe) id: number) {
    const category = await this.service.findOneExerciceCategory(id);
    return category;
  }

  @Post()
  async createExerciceCategory(
    @Body() exerciceCategory: CreateExerciseCategoryDto,
  ) {
    const newCategory =
      await this.service.createExerciceCategory(exerciceCategory);
    return newCategory;
  }

  @Delete(':id')
  async removeExerciceCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.service.removeExerciceCategory(id);
  }
}
