import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-module/prisma.service';
import { CreateExerciseSubCategoryDto } from './dto/exercise-sub-category.dto';

@Injectable()
export class ExerciseSubCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateExerciseSubCategoryDto) {
    return this.prisma.exerciseSubCategory.create({
      data: {
        name: dto.name,
        category: {
          connect: { id: dto.categoryId },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.exerciseSubCategory.findMany();
  }

  async findById(id: number) {
    return this.prisma.exerciseSubCategory.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.exerciseSubCategory.delete({
      where: { id },
    });
  }
}
