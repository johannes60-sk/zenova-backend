// exercise-category.repository.ts
import { Injectable } from '@nestjs/common';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';
import { PrismaService } from '../../prisma-module/prisma.service';

@Injectable()
export class ExerciseCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(exerciseCategory: CreateExerciseCategoryDto) {
    return await this.prisma.exerciseCategory.create({
      data: {
        name: exerciseCategory.name,
      },
    });
  }

  async findAll() {
    return this.prisma.exerciseCategory.findMany();
  }

  async findById(id: number) {
    return this.prisma.exerciseCategory.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.exerciseCategory.delete({
      where: { id },
    });
  }
}
