import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciceSubCategoryModule } from './modules/exercise-sub-category/exercise-sub-category.module';
import { ExerciceCategoryModule } from './modules/exercise-category/exercise-category.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
// import { ExerciceCategory } from './modules/exercice-category/entities/exercice-category.entity';
// import { ExerciceSubCategory } from './modules/exercice-sub-category/entities/exercice-sub-category.entity';
// import { Exercice } from './modules/exercise/entities/exercice.entity';
// import { PopulateDbModule } from './modules/populate-db/populate-db.module';
import { PrismaModule } from './modules/prisma-module/prisma.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost', // Change selon ton config
    //   port: 5432,
    //   username: 'zenova-admin',
    //   password: 'zenova', // Mets ton mot de passe PostgreSQL ici
    //   database: 'zenova-app-mobile', // Nom de ta DB
    //   entities: [ExerciceCategory, ExerciceSubCategory, Exercice],
    //   synchronize: true, // Seulement en dev, ne pas utiliser en prod !
    // }),
    PrismaModule,
    ExerciceCategoryModule,
    ExerciceSubCategoryModule,
    ExerciseModule,
    // PopulateDbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
