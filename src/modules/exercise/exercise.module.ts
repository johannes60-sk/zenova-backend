import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseRepository } from './exercise.repository';
import { ExerciseService } from './exercise.service';
import { ExerciceCategoryModule } from 'src/modules/exercise-category/exercise-category.module';
import { ExerciceSubCategoryModule } from 'src/modules/exercise-sub-category/exercise-sub-category.module';

@Module({
  imports: [ExerciceCategoryModule, ExerciceSubCategoryModule],
  controllers: [ExerciseController],
  providers: [ExerciseService, ExerciseRepository],
  exports: [ExerciseRepository],
})
export class ExerciseModule {}
