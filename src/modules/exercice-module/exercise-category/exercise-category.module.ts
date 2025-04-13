import { Module } from '@nestjs/common';
import { ExerciseCategoryService } from './exercise-category.service';
import { ExerciseCategoryController } from './exercise-category.controller';
import { ExerciseCategoryRepository } from './exercise-category.repository';

@Module({
  controllers: [ExerciseCategoryController],
  providers: [
    ExerciseCategoryService,
    {
      provide: ExerciseCategoryRepository,
      useClass: ExerciseCategoryRepository,
    },
  ],
  exports: [ExerciseCategoryRepository],
})
export class ExerciceCategoryModule {}
