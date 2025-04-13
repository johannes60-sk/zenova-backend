import { Module } from '@nestjs/common';
import { ExerciceCategoryModule } from './modules/exercice-module/exercise-category/exercise-category.module';
import { ExerciseModule } from './modules/exercice-module/exercise/exercise.module';
import { PrismaModule } from './modules/prisma-module/prisma.module';
import { UserModule } from './modules/users/user.module';
import { ExerciceSubCategoryModule } from './modules/exercice-module/exercise-sub-category/exercise-sub-category.module';
import { ProgramModule } from './modules/programe/program.module';

@Module({
  imports: [
    PrismaModule,
    ExerciceCategoryModule,
    ExerciceSubCategoryModule,
    ExerciseModule,
    UserModule,
    ProgramModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
