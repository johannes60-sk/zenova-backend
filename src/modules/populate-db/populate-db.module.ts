import { Module } from '@nestjs/common';
import { PoupulateDbController } from './populate-db.controller';
import { ExerciceCategoryModule } from 'src/modules/exercise-category/exercise-category.module';
import { ExerciceSubCategoryModule } from 'src/modules/exercise-sub-category/exercise-sub-category.module';
import { ExerciseModule } from 'src/modules/exercise/exercise.module';
import { PopulateDbService } from './populate-db.service';

@Module({
  imports: [ExerciceCategoryModule, ExerciceSubCategoryModule, ExerciseModule],
  controllers: [PoupulateDbController],
  providers: [PopulateDbService],
})
export class PopulateDbModule {}
