import axios from 'axios';
import { PrismaService } from './prisma.service'; // ton service Prisma
import { Injectable } from '@nestjs/common';

type ExerciceProps = {
  name: string;
  description: string;
  image: string;
  target: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  secondaryMuscles: string[];
  instructions: string[];
};

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}

  private async getUniqueCategoriesAndSubCategories() {
    const response = await axios.get<ExerciceProps[]>(
      'https://exercisedb.p.rapidapi.com/exercises?limit=2000',
      {
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key':
            '1de9324aaamshe0f7cfc873e3359p182c7cjsn91bc6b760108',
        },
      },
    );
    const exercises = response.data;

    const categories = new Set<string>();
    const subCategories = new Set<string>();

    exercises.forEach((exercise: ExerciceProps) => {
      categories.add(exercise.bodyPart);
      subCategories.add(exercise.target);
    });

    return {
      categories: Array.from(categories),
      subCategories: Array.from(subCategories),
      exercises,
    };
  }

  // Créer les catégories dans la DB
  private async createCategories(categories: string[]) {
    for (const categoryName of categories) {
      await this.prisma.exerciseCategory.upsert({
        where: { name: categoryName },
        update: {},
        create: {
          name: categoryName,
        },
      });
    }
  }

  private async createSubCategories(
    subCategories: string[],
    exercises: ExerciceProps[],
  ) {
    for (const subCategoryName of subCategories) {
      const category = exercises.find(
        (exercise) => exercise.target === subCategoryName,
      )?.bodyPart;

      if (!category) continue; // Si pas de catégorie associée, on saute

      // Récupérer ou créer la catégorie correspondante
      const existingCategory = await this.prisma.exerciseCategory.findUnique({
        where: { name: category },
      });

      if (!existingCategory) continue; // Si la catégorie n'existe pas, on passe

      await this.prisma.exerciseSubCategory.upsert({
        where: { name: subCategoryName },
        update: {},
        create: {
          name: subCategoryName,
          categoryId: existingCategory.id, // Associer la sous-catégorie à sa catégorie
        },
      });
    }
  }

  // Créer les exercices dans la DB
  private async createExercises(exercises: ExerciceProps[]) {
    for (const exercise of exercises) {
      const category = await this.prisma.exerciseCategory.findUnique({
        where: { name: exercise.bodyPart },
      });

      const subCategory = await this.prisma.exerciseSubCategory.findUnique({
        where: { name: exercise.target },
      });

      if (category && subCategory) {
        await this.prisma.exercise.upsert({
          where: { id: parseInt(exercise.id) },
          update: {},
          create: {
            id: parseInt(exercise.id),
            name: exercise.name,
            description: exercise.instructions.join(' '),
            image: exercise.gifUrl,
            target: exercise.target,
            bodyPart: exercise.bodyPart,
            categoryId: category.id,
            subCategoryId: subCategory.id,
          },
        });
      }
    }
  }

  private async clearDatabase() {
    await this.prisma.exercise.deleteMany();
    await this.prisma.exerciseSubCategory.deleteMany();
    await this.prisma.exerciseCategory.deleteMany();
  }

  // Fonction principale pour peupler la DB
  public async populateDb() {
    await this.clearDatabase();

    const { categories, subCategories, exercises } =
      await this.getUniqueCategoriesAndSubCategories();

    await this.createCategories(categories);
    await this.createSubCategories(subCategories, exercises);
    await this.createExercises(exercises);

    console.log('Database seeded successfully');
  }
}
