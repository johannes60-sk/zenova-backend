import { Module } from '@nestjs/common';
import { ExerciseSubCategoryService } from './exercise-sub-category.service';
import { ExerciceSubCategoryController } from './exercice-sub-category.controller';
import { ExerciseSubCategoryRepository } from './exercise-sub-category.repository';
import { ExerciceCategoryModule } from 'src/modules/exercice-module/exercise-category/exercise-category.module';

@Module({
  imports: [ExerciceCategoryModule],
  controllers: [ExerciceSubCategoryController],
  providers: [
    ExerciseSubCategoryService,
    {
      provide: ExerciseSubCategoryRepository,
      useClass: ExerciseSubCategoryRepository,
    },
  ],
  exports: [ExerciseSubCategoryRepository],
})
export class ExerciceSubCategoryModule {}
